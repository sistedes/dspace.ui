import { Component } from '@angular/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from 'src/app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from 'src/app/core/shared/item.model';
import { SistedesPublicationSearchResultListElementComponent } from '../../search-result-list-elements/sistedes-publication/sistedes-publication-search-result-list-element.component';

@listableObjectComponent('Seminario', ViewMode.ListElement)
@listableObjectComponent('Boletín', ViewMode.ListElement)
@Component({
  selector: 'ds-sistedes-publication-list-element',
  templateUrl: './sistedes-publication-list-element.component.html',
  standalone: true,
  imports: [
    SistedesPublicationSearchResultListElementComponent,
  ],
})
/**
 * The component for displaying a list element for an item of the type Sistedes publication
 */
export class SistedesPublicationListElementComponent extends AbstractListableElementComponent<Item> {
} 
