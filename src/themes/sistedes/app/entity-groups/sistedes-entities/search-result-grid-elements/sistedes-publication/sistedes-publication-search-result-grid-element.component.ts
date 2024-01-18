import { Component } from '@angular/core';
import { focusShadow } from 'src/app/shared/animations/focus';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultGridElementComponent } from 'src/app/shared/object-grid/search-result-grid-element/search-result-grid-element.component';
import { Item } from 'src/app/core/shared/item.model';
import { ItemSearchResult } from 'src/app/shared/object-collection/shared/item-search-result.model';
import { getItemPageRoute } from 'src/app/item-page/item-page-routing-paths';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { BitstreamDataService } from 'src/app/core/data/bitstream-data.service';

@listableObjectComponent('ArtículoSearchResult', ViewMode.GridElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.GridElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.GridElement)
@listableObjectComponent('SeminarioSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-sistedes-publication-search-result-grid-element',
  templateUrl: './sistedes-publication-search-result-grid-element.component.html',
  animations: [focusShadow]
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
