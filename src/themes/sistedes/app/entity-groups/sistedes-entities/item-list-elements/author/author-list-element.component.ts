import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../../../../app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';

@listableObjectComponent('Autor', ViewMode.ListElement)
@Component({
  selector: 'ds-author-list-element',
  styleUrls: ['./author-list-element.component.scss'],
  templateUrl: './author-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Author
 */
export class AuthorListElementComponent extends AbstractListableElementComponent<Item> {
}
