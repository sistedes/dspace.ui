import {
  AsyncPipe,
  NgClass,
} from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  APP_CONFIG,
  AppConfig,
} from '@dspace/config/app-config.interface';
import { TranslateModule } from '@ngx-translate/core';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { MetadataDirective } from 'src/app/shared/metadata.directive';
import { ThemedBadgesComponent } from 'src/app/shared/object-collection/shared/badges/themed-badges.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemSearchResultListElementComponent } from 'src/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { OrcidBadgeAndTooltipComponent } from 'src/app/shared/orcid-badge-and-tooltip/orcid-badge-and-tooltip.component';
import { TruncatableComponent } from 'src/app/shared/truncatable/truncatable.component';
import { TruncatableService } from 'src/app/shared/truncatable/truncatable.service';
import { TruncatablePartComponent } from 'src/app/shared/truncatable/truncatable-part/truncatable-part.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';

@listableObjectComponent('AuthorSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-author-search-result-list-element',
  templateUrl: './author-search-result-list-element.component.html',
  imports: [
    AsyncPipe,
    MetadataDirective,
    NgClass,
    OrcidBadgeAndTooltipComponent,
    RouterLink,
    ThemedBadgesComponent,
    ThemedThumbnailComponent,
    TranslateModule,
    TruncatableComponent,
    TruncatablePartComponent,
  ],
})
/**
 * The component for displaying a list element for an item search result of the type Author
 */
export class AuthorSearchResultListElementComponent extends ItemSearchResultListElementComponent implements OnInit {

  public constructor(
    protected truncatableService: TruncatableService,
    public dsoNameService: DSONameService,
    @Inject(APP_CONFIG) protected appConfig: AppConfig,
  ) {
    super(truncatableService, dsoNameService, appConfig);
  }

  /**
   * Display thumbnail if required by configuration
   */
  showThumbnails: boolean;

  ngOnInit(): void {
    super.ngOnInit();
    this.showThumbnails = this.appConfig.browseBy.showThumbnails;
  }
}
