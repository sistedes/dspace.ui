import { Component } from '@angular/core';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { focusShadow } from '../../../../../../../app/shared/animations/focus';
import { ItemSearchResultGridElementComponent } from '../../../../../../../app/shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';

@listableObjectComponent('AutorSearchResult', ViewMode.GridElement)
@Component({
  selector: 'ds-author-search-result-grid-element',
  styleUrls: ['./author-search-result-grid-element.component.scss'],
  templateUrl: './author-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item search result of the type Author
 */
export class AuthorSearchResultGridElementComponent extends ItemSearchResultGridElementComponent {
}
