import { Component } from '@angular/core';
import { Item } from 'src/app/core/shared/item.model';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from 'src/app/shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { AuthorSearchResultListElementComponent } from '../../search-result-list-elements/author/author-search-result-list-element.component';

@listableObjectComponent('Autor', ViewMode.ListElement)
@Component({
  selector: 'ds-author-list-element',
  templateUrl: './author-list-element.component.html',
  standalone: true,
  imports: [
    AuthorSearchResultListElementComponent,
  ],
})
/**
 * The component for displaying a list element for an item of the type Author
 */
export class AuthorListElementComponent extends AbstractListableElementComponent<Item> {
}
