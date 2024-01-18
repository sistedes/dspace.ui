import { Component } from '@angular/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from 'src/app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from 'src/app/core/shared/item.model';

@listableObjectComponent('Artículo', ViewMode.ListElement)
@listableObjectComponent('Resumen', ViewMode.ListElement)
@listableObjectComponent('Preliminares', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-list-element',
  templateUrl: './proceedings-publication-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type proceedings publication
 */
export class ProceedingsPublicationListElementComponent extends AbstractListableElementComponent<Item> {
}
