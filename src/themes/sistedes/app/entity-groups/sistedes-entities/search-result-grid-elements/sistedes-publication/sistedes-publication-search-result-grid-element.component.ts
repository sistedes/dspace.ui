import { AsyncPipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { getItemPageRoute } from '@dspace/core/router/utils/dso-route.utils';
import { MetadataValue } from '@dspace/core/shared/metadata.models';
import { ItemSearchResult } from '@dspace/core/shared/object-collection/item-search-result.model';
import { TranslateModule } from '@ngx-translate/core';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { BitstreamDataService } from 'src/app/core/data/bitstream-data.service';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { focusShadow } from 'src/app/shared/animations/focus';
import { MetadataDirective } from 'src/app/shared/metadata.directive';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { SearchResultGridElementComponent } from 'src/app/shared/object-grid/search-result-grid-element/search-result-grid-element.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';

@listableObjectComponent('PaperSearchResult', ViewMode.GridElement)
@listableObjectComponent('AbstractSearchResult', ViewMode.GridElement)
@listableObjectComponent('ParatextSearchResult', ViewMode.GridElement)
@listableObjectComponent('SeminarSearchResult', ViewMode.GridElement)
@listableObjectComponent('BulletinSearchResult', ViewMode.GridElement)
@listableObjectComponent('MinutesSearchResult', ViewMode.GridElement)
@listableObjectComponent(ItemSearchResult, ViewMode.GridElement)
@Component({
  selector: 'ds-sistedes-publication-search-result-grid-element',
  templateUrl: './sistedes-publication-search-result-grid-element.component.html',
  animations: [focusShadow],
  imports: [
    AsyncPipe,
    MetadataDirective,
    RouterLink,
    ThemedBadgesComponent,
    ThemedThumbnailComponent,
    TranslateModule,
    TruncatableComponent,
    TruncatablePartComponent,
  ],
})
/**
 * The component for displaying a grid element for an item search result of the type Sistedes Publication
 */
export class SistedesPublicationSearchResultGridElementComponent extends SearchResultGridElementComponent<ItemSearchResult, Item> implements OnInit {
  /**
   * Route to the item's page
   */
  itemPageRoute: string;

  dsoTitle: MetadataValue;

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
