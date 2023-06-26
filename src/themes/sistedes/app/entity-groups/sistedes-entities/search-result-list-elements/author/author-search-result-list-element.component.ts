import { Component, Inject } from '@angular/core';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { ItemSearchResultListElementComponent } from '../../../../../../../app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component';
import { TruncatableService } from '../../../../../../../app/shared/truncatable/truncatable.service';
import { DSONameService } from '../../../../../../../app/core/breadcrumbs/dso-name.service';
import { APP_CONFIG, AppConfig } from '../../../../../../../config/app-config.interface';

@listableObjectComponent('AutorSearchResult', ViewMode.ListElement)
@Component({
  selector: 'ds-author-search-result-list-element',
  styleUrls: ['./author-search-result-list-element.component.scss'],
  templateUrl: './author-search-result-list-element.component.html'
})
/**
 * The component for displaying a list element for an item search result of the type Author
 */
export class AuthorSearchResultListElementComponent extends ItemSearchResultListElementComponent {

  public constructor(
    protected truncatableService: TruncatableService,
    protected dsoNameService: DSONameService,
    @Inject(APP_CONFIG) protected appConfig: AppConfig
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
