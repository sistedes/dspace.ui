import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PaginatedSearchOptions } from 'src/app/shared/search/models/paginated-search-options.model';
import { fadeIn, fadeInOut } from 'src/app/shared/animations/fade';
import { RemoteData } from 'src/app/core/data/remote-data';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { Item } from 'src/app/core/shared/item.model';
import { PaginationComponentOptions } from 'src/app/shared/pagination/pagination-component-options.model';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { SearchService } from 'src/app/core/shared/search/search.service';
import { SortDirection, SortOptions } from 'src/app/core/cache/models/sort-options.model';
import { environment } from 'src/environments/environment';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { SearchConfigurationService } from 'src/app/core/shared/search/search-configuration.service';
import { toDSpaceObjectListRD } from 'src/app/core/shared/operators';
import { Observable } from 'rxjs';
import { FollowLinkConfig } from 'src/app/shared/utils/follow-link-config.model';
import { APP_CONFIG, AppConfig } from 'src/config/app-config.interface';
import { isPlatformBrowser } from '@angular/common';
import { setPlaceHolderAttributes } from 'src/app/shared/utils/object-list-utils';
import { DSpaceObjectType } from 'src/app/core/shared/dspace-object-type.model';

@Component({
  selector: 'ds-highlighted-communities-list',
  templateUrl: './highlighted-communities-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeIn,
    fadeInOut
  ]
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
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {

    this.paginationConfig = Object.assign(new PaginationComponentOptions(), {
      id: 'hp',
      pageSize: environment.sistedes.highlightedCommunities.pageSize,
      currentPage: 1,
      maxSize: 1
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
      toDSpaceObjectListRD()
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

