import { 
  AsyncPipe,
  NgIf
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { focusShadow } from 'src/app/shared/animations/focus';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemSearchResultGridElementComponent } from 'src/app/shared/object-grid/search-result-grid-element/item-search-result/item/item-search-result-grid-element.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';

@listableObjectComponent('AutorSearchResult', ViewMode.GridElement)
@Component({
  selector: 'ds-author-search-result-grid-element',
  templateUrl: './author-search-result-grid-element.component.html',
  animations: [focusShadow],
  standalone: true,
  imports: [
    TruncatableComponent,
    NgIf,
    RouterLink,
    ThemedThumbnailComponent,
    ThemedBadgesComponent,
    TruncatablePartComponent,
    AsyncPipe,
    TranslateModule,
  ],

})
/**
 * The component for displaying a grid element for an item search result of the type Author
 */
export class AuthorSearchResultGridElementComponent extends ItemSearchResultGridElementComponent {
}
