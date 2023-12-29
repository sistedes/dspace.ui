import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { RemoteData } from 'src/app/core/data/remote-data';
import { Bitstream } from 'src/app/core/shared/bitstream.model';
import { FullFileSectionComponent as BaseComponent} from 'src/app/item-page/full/field-components/file-section/full-file-section.component';
import { hasValue } from 'src/app/shared/empty.util';
import { PaginationComponentOptions } from 'src/app/shared/pagination/pagination-component-options.model';
import { followLink } from 'src/app/shared/utils/follow-link-config.model';

@Component({
  selector: 'ds-item-page-full-file-section',
  // styleUrls: ['./full-file-section.component.scss'],
  styleUrls: ['../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component.scss'],
  templateUrl: './full-file-section.component.html',
  // templateUrl: '../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component.html',
})
export class FullFileSectionComponent extends BaseComponent {

  other$: Observable<RemoteData<PaginatedList<Bitstream>>>;

  otherOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'obo',
    currentPage: 1,
    pageSize: this.appConfig.item.bitstream.pageSize
  });

  initialize(): void {
    super.initialize();
    this.other$ = this.paginationService.getCurrentPagination(this.originalOptions.id, this.originalOptions).pipe(
      switchMap((options: PaginationComponentOptions) => this.bitstreamDataService.findAllByItemAndBundleName(
        this.item,
        'OTHER',
        {elementsPerPage: options.pageSize, currentPage: options.currentPage},
        true,
        true,
        followLink('format'),
        followLink('thumbnail'),
      )),
      tap((rd: RemoteData<PaginatedList<Bitstream>>) => {
          if (hasValue(rd.errorMessage)) {
            this.notificationsService.error(this.translateService.get('file-section.error.header'), `${rd.statusCode} ${rd.errorMessage}`);
          }
        }
      )
    );
  }
}
