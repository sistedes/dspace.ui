import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommunityPageComponent as BaseComponent} from 'src/app/community-page/community-page.component';
import { fadeInOut } from 'src/app/shared/animations/fade';
import { Community } from 'src/app/core/shared/community.model';


@Component({
  selector: 'ds-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
/**
 * This component represents a detail page for a single community
 */
export class CommunityPageComponent extends BaseComponent {
  getPermanentUri(community: Community): string {
    let sistedesId = community.firstMetadataValue('dc.identifier.sistedes');
    return sistedesId ? 'https://hdl.handle.net/' + sistedesId : community.handle;
  }
}
