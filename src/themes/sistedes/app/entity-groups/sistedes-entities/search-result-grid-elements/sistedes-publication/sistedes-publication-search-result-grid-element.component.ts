import {
  AsyncPipe,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { BitstreamDataService } from 'src/app/core/data/bitstream-data.service';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { getItemPageRoute } from 'src/app/item-page/item-page-routing-paths';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';
import { focusShadow } from 'src/app/shared/animations/focus';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { ItemSearchResult } from 'src/app/shared/object-collection/shared/item-search-result.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { SearchResultGridElementComponent } from 'src/app/shared/object-grid/search-result-grid-element/search-result-grid-element.component';

@listableObjectComponent('ArtículoSearchResult', ViewMode.GridElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.GridElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.GridElement)
@listableObjectComponent('SeminarioSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-sistedes-publication-search-result-grid-element',
  templateUrl: './sistedes-publication-search-result-grid-element.component.html',
  animations: [focusShadow],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterLink,
    ThemedThumbnailComponent,
    ThemedBadgesComponent,
    TruncatableComponent,
    TruncatablePartComponent,
    AsyncPipe,
    TranslateModule,
  ],
})
/**
 * The component for displaying a grid element for an item search result of the type Sistedes Publication
 */
export class SistedesPublicationSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  dsoTitle: string;

  constructor(
    public dsoNameService: DSONameService,
    protected truncatableService: TruncatableService,
    protected bitstreamDataService: BitstreamDataService,
  ) {
    super(dsoNameService, truncatableService, bitstreamDataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.itemPageRoute = getItemPageRoute(this.dso);
    this.dsoTitle = this.dsoNameService.getHitHighlights(this.object, this.dso);
  }
}
