import { Component } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../../../../app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../../../../app/core/shared/item.model';

@listableObjectComponent('Artículo', ViewMode.ListElement)
@listableObjectComponent('Resumen', ViewMode.ListElement)
@listableObjectComponent('Preliminares', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-list-element',
  styleUrls: ['./proceedings-publication-list-element.component.scss'],
  templateUrl: './proceedings-publication-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type proceedings publication
 */
export class ProceedingsPublicationListElementComponent extends AbstractListableElementComponent<Item> {
}
