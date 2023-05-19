import { Component } from '@angular/core';
import { focusShadow } from '../../../../../../../app/shared/animations/focus';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultGridElementComponent } from '../../../../../../../app/shared/object-grid/search-result-grid-element/search-result-grid-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ItemSearchResult } from '../../../../../../../app/shared/object-collection/shared/item-search-result.model';
import { getItemPageRoute } from '../../../../../../../app/item-page/item-page-routing-paths';
import { DSONameService } from '../../../../../../../app/core/breadcrumbs/dso-name.service';
import { TruncatableService } from '../../../../../../../app/shared/truncatable/truncatable.service';
import { BitstreamDataService } from '../../../../../../../app/core/data/bitstream-data.service';

@listableObjectComponent('ArtículoSearchResult', ViewMode.GridElement)
@listableObjectComponent('ResumenSearchResult', ViewMode.GridElement)
@listableObjectComponent('PreliminaresSearchResult', ViewMode.GridElement)
@listableObjectComponent('SeminarioSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-sistedes-publication-search-result-grid-element',
  styleUrls: ['./sistedes-publication-search-result-grid-element.component.scss'],
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
    protected truncatableService: TruncatableService,
    protected bitstreamDataService: BitstreamDataService,
    private dsoNameService: DSONameService,
  ) {
    super(truncatableService, bitstreamDataService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.itemPageRoute = getItemPageRoute(this.dso);
    this.dsoTitle = this.dsoNameService.getHitHighlights(this.object, this.dso);
  }
}
