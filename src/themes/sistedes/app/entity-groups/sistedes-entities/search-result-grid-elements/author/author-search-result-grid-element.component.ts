import { Component } from '@angular/core';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { focusShadow } from 'src/app/shared/animations/focus';
import { ItemSearchResultGridElementComponent } from 'src/app/shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';

@listableObjectComponent('AutorSearchResult', ViewMode.GridElement)
@Component({
  selector: 'ds-author-search-result-grid-element',
  templateUrl: './author-search-result-grid-element.component.html',
  animations: [focusShadow]
})
/**
 * The component for displaying a grid element for an item search result of the type Author
 */
export class AuthorSearchResultGridElementComponent extends ItemSearchResultGridElementComponent {
}
