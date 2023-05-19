import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CollectionPageComponent as BaseComponent} from 'src/app/collection-page/collection-page.component';
import { fadeIn, fadeInOut } from 'src/app/shared/animations/fade';
import { Collection } from 'src/app/core/shared/collection.model';


@Component({
  selector: 'ds-collection-page',
  templateUrl: './collection-page.component.html',
  // templateUrl: '../../../../app/collection-page/collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
  // styleUrls: ['../../../../app/collection-page/collection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeIn,
    fadeInOut
  ]
})
/**
 * This component represents a detail page for a single collection
 */
export class CollectionPageComponent extends BaseComponent {
  getPermanentUri(collection : Collection): string {
    var sistedesId = collection.firstMetadataValue('dc.identifier.sistedes');
    return sistedesId ? "https://hdl.handle.net/" + sistedesId : collection.handle;
  }
}
