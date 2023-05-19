import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../../../../app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';

@listableObjectComponent('Autor', ViewMode.GridElement)
@Component({
  selector: 'ds-author-grid-element',
  styleUrls: ['./author-grid-element.component.scss'],
  templateUrl: './author-grid-element.component.html',
})
/**
 * The component for displaying a grid element for an item of the type Author
 */
export class AuthorGridElementComponent extends AbstractListableElementComponent<Item> {
}
