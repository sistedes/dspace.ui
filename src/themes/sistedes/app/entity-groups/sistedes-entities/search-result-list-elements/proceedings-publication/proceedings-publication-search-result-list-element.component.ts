import {
  AsyncPipe,
  NgClass,
} from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { getItemPageRoute } from '@dspace/core/router/utils/dso-route.utils';
import { ItemSearchResult } from '@dspace/core/shared/object-collection/item-search-result.model';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultListElementComponent } from 'src/app/shared/object-list/search-result-list-element/search-result-list-element.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';
import { MetadataDirective } from 'src/app/shared/metadata.directive';
import { MetadataLinkViewComponent } from 'src/app/shared/metadata-link-view/metadata-link-view.component';
import { environment } from 'src/environments/environment';
import { MetadataValueFilter } from '@dspace/core/shared/metadata.models';
import { PLACEHOLDER_VALUE } from '@dspace/core/shared/metadata.utils';

@listableObjectComponent('ArtículoSearchResult', ViewMode.ListElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.ListElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-search-result-list-element',
  styleUrls: ['./proceedings-publication-search-result-list-element.component.scss'],
  templateUrl: './proceedings-publication-search-result-list-element.component.html',
  imports: [
    AsyncPipe,
    MetadataDirective,
    MetadataLinkViewComponent,
    NgClass,
    RouterLink,
    ThemedBadgesComponent,
    ThemedThumbnailComponent,
    TruncatableComponent,
    TruncatablePartComponent,
  ],

})
/**
 * The component for displaying a list element for a publication in proceedings search result
 */
export class ProceedingsPublicationSearchResultListElementComponent extends SearchResultListElementComponent<ItemSearchResult, Item> implements OnInit {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  authorMetadata = [ 'dc.contributor.author' ];


  readonly placeholderFilter: MetadataValueFilter = {
    negate: true,
    value: PLACEHOLDER_VALUE,
  };

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.showThumbnails ?? this.appConfig.browseBy.showThumbnails;
    this.itemPageRoute = getItemPageRoute(this.dso);
  }
}
