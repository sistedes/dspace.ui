
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ItemMetadataRepresentationListElementComponent } from 'src/app/shared/object-list/metadata-representation-list-element/item/item-metadata-representation-list-element.component';
import { OrcidBadgeAndTooltipComponent } from 'src/app/shared/orcid-badge-and-tooltip/orcid-badge-and-tooltip.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';

@Component({
  selector: 'ds-author-item-metadata-list-element',
  templateUrl: './author-item-metadata-list-element.component.html',
  styleUrls: [ './author-item-metadata-list-element.component.scss' ],
  standalone: true,
  imports: [
    TruncatableComponent,
    OrcidBadgeAndTooltipComponent,
    RouterLink,
    NgbTooltipModule
  ],
})
/**
 * The component for displaying an item of the type Author as a metadata field
 */
export class AuthorItemMetadataListElementComponent extends ItemMetadataRepresentationListElementComponent {
}
