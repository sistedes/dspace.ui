import {
  AsyncPipe,
  isPlatformBrowser,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import {
  APP_CONFIG,
  AppConfig,
} from 'src/config/app-config.interface';
import { environment } from 'src/environments/environment';
import {
  SortDirection,
  SortOptions,
} from 'src/app/core/cache/models/sort-options.model';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { RemoteData } from 'src/app/core/data/remote-data';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { DSpaceObjectType } from 'src/app/core/shared/dspace-object-type.model';
import { Item } from 'src/app/core/shared/item.model';
import { toDSpaceObjectListRD } from 'src/app/core/shared/operators';
import { SearchService } from 'src/app/core/shared/search/search.service';
import { SearchConfigurationService } from 'src/app/core/shared/search/search-configuration.service';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import {
  fadeIn,
  fadeInOut,
} from 'src/app/shared/animations/fade';
import { ErrorComponent } from 'src/app/shared/error/error.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { ListableObjectComponentLoaderComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object-component-loader.component';
import { PaginationComponentOptions } from 'src/app/shared/pagination/pagination-component-options.model';
import { PaginatedSearchOptions } from 'src/app/shared/search/models/paginated-search-options.model';
import {
  followLink,
  FollowLinkConfig,
} from 'src/app/shared/utils/follow-link-config.model';
import { setPlaceHolderAttributes } from 'src/app/shared/utils/object-list-utils';
import { VarDirective } from 'src/app/shared/utils/var.directive';

@Component({
  selector: 'ds-highlighted-communities-list',
  templateUrl: './highlighted-communities-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeIn,
    fadeInOut,
  ],
  standalone: true,
  imports: [
    VarDirective,
    NgIf,
    NgClass,
    NgFor,
    ListableObjectComponentLoaderComponent,
    ErrorComponent,
    LoadingComponent,
    AsyncPipe,
    TranslateModule,
  ],
})
export class HighlightedCommunitiesListComponent implements OnInit {
  itemRD$: Observable<RemoteData<PaginatedList<Item>>>;
  paginationConfig: PaginationComponentOptions;
  sortConfig: SortOptions;

/**
 * The view-mode we're currently on
 * @type {ViewMode}
 */
  viewMode = ViewMode.ListElement;

  private _placeholderFontClass: string;

  constructor(
    private searchService: SearchService,
    private paginationService: PaginationService,
    public searchConfigurationService: SearchConfigurationService,
    protected elementRef: ElementRef,
    @Inject(APP_CONFIG) private appConfig: AppConfig,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {

    this.paginationConfig = Object.assign(new PaginationComponentOptions(), {
      id: 'hp',
      pageSize: environment.sistedes.highlightedCommunities.pageSize,
      currentPage: 1,
      maxSize: 1,
    });
    this.sortConfig = new SortOptions(environment.sistedes.highlightedCommunities.sortField, SortDirection.ASC);
  }
  ngOnInit(): void {
    const linksToFollow: FollowLinkConfig<Item>[] = [];

    this.itemRD$ = this.searchService.search(
      new PaginatedSearchOptions({
        pagination: this.paginationConfig,
        dsoTypes: [DSpaceObjectType.COMMUNITY],
        sort: this.sortConfig,
        query: environment.sistedes.highlightedCommunities.query,
      }),
      undefined,
      undefined,
      undefined,
      ...linksToFollow,
    ).pipe(
      toDSpaceObjectListRD(),
    ) as Observable<RemoteData<PaginatedList<Item>>>;
  }

  ngOnDestroy(): void {
    this.paginationService.clearPagination(this.paginationConfig.id);
  }

  get placeholderFontClass(): string {
    if (this._placeholderFontClass === undefined) {
      if (isPlatformBrowser(this.platformId)) {
        const width = this.elementRef.nativeElement.offsetWidth;
        this._placeholderFontClass = setPlaceHolderAttributes(width);
      } else {
        this._placeholderFontClass = 'hide-placeholder-text';
      }
    }
    return this._placeholderFontClass;
  }

}

