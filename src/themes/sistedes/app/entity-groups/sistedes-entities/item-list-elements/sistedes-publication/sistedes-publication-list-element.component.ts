import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../../../../app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';

@listableObjectComponent('Seminario', ViewMode.ListElement)
@listableObjectComponent('Boletín', ViewMode.ListElement)
@Component({
  selector: 'ds-sistedes-publication-list-element',
  styleUrls: ['./sistedes-publication-list-element.component.scss'],
  templateUrl: './sistedes-publication-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type Sistedes publication
 */
export class SistedesPublicationListElementComponent extends AbstractListableElementComponent<Item> {
}
