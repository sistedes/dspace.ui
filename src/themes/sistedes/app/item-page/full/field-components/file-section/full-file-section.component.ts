import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { PaginationComponentOptions } from '@dspace/core/pagination/pagination-component-options.model';
import { followLink } from '@dspace/core/shared/follow-link-config.model';
import { hasValue } from '@dspace/shared/utils/empty.util';
import { TranslateModule } from '@ngx-translate/core';
import {
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { RemoteData } from 'src/app/core/data/remote-data';
import { Bitstream } from 'src/app/core/shared/bitstream.model';

import { FullFileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component';
import { ThemedFileDownloadLinkComponent } from '../../../../../../../app/shared/file-download-link/themed-file-download-link.component';
import { MetadataFieldWrapperComponent } from '../../../../../../../app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { PaginationComponent } from '../../../../../../../app/shared/pagination/pagination.component';
import { FileSizePipe } from '../../../../../../../app/shared/utils/file-size-pipe';
import { VarDirective } from '../../../../../../../app/shared/utils/var.directive';
import { ThemedThumbnailComponent } from '../../../../../../../app/thumbnail/themed-thumbnail.component';


@Component({
  selector: 'ds-themed-item-page-full-file-section',
  styleUrls: ['../../../../../../../app/item-page/full/field-components/file-section/full-file-section.component.scss'],
  templateUrl: './full-file-section.component.html',
  imports: [
    AsyncPipe,
    FileSizePipe,
    MetadataFieldWrapperComponent,
    PaginationComponent,
    ThemedFileDownloadLinkComponent,
    ThemedThumbnailComponent,
    TranslateModule,
    VarDirective,
  ],
})
export class FullFileSectionComponent extends BaseComponent {

  other$: Observable<RemoteData<PaginatedList<Bitstream>>>;

  otherOptions = Object.assign(new PaginationComponentOptions(), {
    id: 'otbo',
    currentPage: 1,
    pageSize: this.appConfig.item.bitstream.pageSize,
  });

  initialize(): void {
    super.initialize();
    this.other$ = this.paginationService.getCurrentPagination(this.originalOptions.id, this.originalOptions).pipe(
      switchMap((options: PaginationComponentOptions) => this.bitstreamDataService.findAllByItemAndBundleName(
        this.item,
        'OTHER',
        { elementsPerPage: options.pageSize, currentPage: options.currentPage },
        true,
        true,
        followLink('format'),
        followLink('thumbnail'),
      )),
      tap((rd: RemoteData<PaginatedList<Bitstream>>) => {
        if (hasValue(rd.errorMessage)) {
          this.notificationsService.error(this.translateService.get('file-section.error.header'), `${rd.statusCode} ${rd.errorMessage}`);
        }
      },
      ),
    );
  }
}
