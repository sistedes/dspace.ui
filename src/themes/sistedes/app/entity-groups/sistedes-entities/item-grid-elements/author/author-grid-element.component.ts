import { Component } from '@angular/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from 'src/app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from 'src/app/core/shared/item.model';

@listableObjectComponent('Autor', ViewMode.GridElement)
@Component({
  selector: 'ds-author-grid-element',
  templateUrl: './author-grid-element.component.html',
})
/**
 * The component for displaying a grid element for an item of the type Author
 */
export class AuthorGridElementComponent extends AbstractListableElementComponent<Item> {
}
