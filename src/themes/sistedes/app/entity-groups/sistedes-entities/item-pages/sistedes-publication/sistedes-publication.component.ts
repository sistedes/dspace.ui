import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLink,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { MetadataUriValuesComponent } from 'src/app/item-page/field-components/metadata-uri-values/metadata-uri-values.component';
import { ThemedMediaViewerComponent } from 'src/app/item-page/media-viewer/themed-media-viewer.component';
import { MiradorViewerComponent } from 'src/app/item-page/mirador-viewer/mirador-viewer.component';
import { ThemedFileSectionComponent } from 'src/app/item-page/simple/field-components/file-section/themed-file-section.component';
import { ItemPageAbstractFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/abstract/item-page-abstract-field.component';
import { ItemPageDateFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/date/item-page-date-field.component';
import { GenericItemPageFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/generic/generic-item-page-field.component';
import { ItemPageLicenseFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/license/item-page-license-field.component';
import { ThemedItemPageTitleFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/title/themed-item-page-field.component';
import { ItemComponent } from 'src/app/item-page/simple/item-types/shared/item.component';
import { ThemedMetadataRepresentationListComponent } from 'src/app/item-page/simple/metadata-representation-list/themed-metadata-representation-list.component';
import { AttachmentSectionComponent } from 'src/app/shared/bitstream-attachment/section/attachment-section.component';
import { DsoEditMenuComponent } from 'src/app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { MetadataFieldWrapperComponent } from 'src/app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ThemedResultsBackButtonComponent } from 'src/app/shared/results-back-button/themed-results-back-button.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';
import { CollectionsWithParentComponent } from 'src/themes/sistedes/app/item-page/field-components/collections/collections-with-parent.component';


/**
 * Component that represents a conference publication Item page
 */

@listableObjectComponent('Paper', ViewMode.StandalonePage)
@listableObjectComponent('Abstract', ViewMode.StandalonePage)
@listableObjectComponent('Paratext', ViewMode.StandalonePage)
@listableObjectComponent('Seminar', ViewMode.StandalonePage)
@listableObjectComponent('Bulletin', ViewMode.StandalonePage)
@listableObjectComponent('Minutes', ViewMode.StandalonePage)
@Component({
  selector: 'ds-sistedes-publication',
  templateUrl: './sistedes-publication.component.html',
  styleUrls: [ './sistedes-publication.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    CollectionsWithParentComponent,
    DsoEditMenuComponent,
    GenericItemPageFieldComponent,
    ItemPageAbstractFieldComponent,
    AttachmentSectionComponent,
    ItemPageDateFieldComponent,
    ItemPageLicenseFieldComponent,
    MetadataFieldWrapperComponent,
    MetadataUriValuesComponent,
    MiradorViewerComponent,
    NgbNav,
    NgbNavContent,
    NgbNavItem,
    NgbNavLink,
    NgbNavOutlet,
    RouterLink,
    ThemedFileSectionComponent,
    ThemedItemPageTitleFieldComponent,
    ThemedMediaViewerComponent,
    ThemedMetadataRepresentationListComponent,
    ThemedResultsBackButtonComponent,
    ThemedThumbnailComponent,
    TranslateModule,
  ],
})
export class SistedesPublicationComponent extends ItemComponent {
}
