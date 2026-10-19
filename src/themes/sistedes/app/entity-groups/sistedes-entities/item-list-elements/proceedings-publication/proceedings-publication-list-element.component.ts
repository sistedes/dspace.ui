import { Component } from '@angular/core';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from 'src/app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';

import { ProceedingsPublicationSearchResultListElementComponent } from '../../search-result-list-elements/proceedings-publication/proceedings-publication-search-result-list-element.component';

@listableObjectComponent('Artículo', ViewMode.ListElement)
@listableObjectComponent('Resumen', ViewMode.ListElement)
@listableObjectComponent('Preliminares', ViewMode.ListElement)
@Component({
  selector: 'ds-proceedings-publication-list-element',
  templateUrl: './proceedings-publication-list-element.component.html',
  imports: [
    ProceedingsPublicationSearchResultListElementComponent,
  ],
})
/**
 * The component for displaying a list element for an item of the type proceedings publication
 */
export class ProceedingsPublicationListElementComponent extends AbstractListableElementComponent<Item> {
}
