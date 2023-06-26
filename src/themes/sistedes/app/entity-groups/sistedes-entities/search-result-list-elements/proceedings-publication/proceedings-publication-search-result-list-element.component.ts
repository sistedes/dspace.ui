import { Component } from '@angular/core';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { ItemSearchResult } from '../../../../../../../app/shared/object-collection/shared/item-search-result.model';
import { SearchResultListElementComponent } from '../../../../../../../app/shared/object-list/search-result-list-element/search-result-list-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { getItemPageRoute } from '../../../../../../../app/item-page/item-page-routing-paths';

@listableObjectComponent('ArtículoSearchResult', ViewMode.ListElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.ListElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-search-result-list-element',
  styleUrls: ['./proceedings-publication-search-result-list-element.component.scss'],
  templateUrl: './proceedings-publication-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for a publication in proceedings search result
 */
export class ProceedingsPublicationSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  /**
   * Display thumbnails if required by configuration
   */
  showThumbnails: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
}
