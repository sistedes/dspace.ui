import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { getItemPageRoute } from 'src/app/item-page/item-page-routing-paths';
import { ThumbnailComponent } from 'src/app/thumbnail/thumbnail.component';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { ItemSearchResult } from 'src/app/shared/object-collection/shared/item-search-result.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { SearchResultListElementComponent } from 'src/app/shared/object-list/search-result-list-element/search-result-list-element.component';

@listableObjectComponent('ArtículoSearchResult', ViewMode.ListElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.ListElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-search-result-list-element',
  styleUrls: ['./proceedings-publication-search-result-list-element.component.scss'],
  templateUrl: './proceedings-publication-search-result-list-element.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgFor,
    RouterLink,
    ThumbnailComponent,
    ThemedBadgesComponent,
    TruncatableComponent,
    TruncatablePartComponent,
    AsyncPipe,
  ],

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
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
}
