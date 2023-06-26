import { Component } from '@angular/core';
import { metadataRepresentationComponent } from '../../../../../../../app/shared/metadata-representation/metadata-representation.decorator';
import { MetadataRepresentationType } from '../../../../../../../app/core/shared/metadata-representation/metadata-representation.model';
import { ItemMetadataRepresentationListElementComponent } from '../../../../../../../app/shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';

@metadataRepresentationComponent('Autor', MetadataRepresentationType.Item)
@Component({
  selector: 'ds-author-item-metadata-list-element',
  templateUrl: './author-item-metadata-list-element.component.html'
})
/**
 * The component for displaying an item of the type Person as a metadata field
 */
export class AuthorItemMetadataListElementComponent extends ItemMetadataRepresentationListElementComponent {
}
