import { Component } from '@angular/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemComponent } from 'src/app/item-page/simple/item-types/shared/item.component';

@listableObjectComponent('Autor', ViewMode.StandalonePage)
@Component({
  selector: 'ds-author',
  templateUrl: './author.component.html'
})
/**
 * The component for displaying metadata and relations of an item of the type Person
 */
export class AuthorComponent extends ItemComponent {
}
