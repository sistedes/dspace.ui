import { AsyncPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewMode } from 'src/app/core/shared/view-mode.model';
import { DsoEditMenuComponent } from 'src/app/shared/dso-page/dso-edit-menu/dso-edit-menu.component';
import { MetadataFieldWrapperComponent } from 'src/app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { listableObjectComponent } from 'src/app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ThemedResultsBackButtonComponent } from 'src/app/shared/results-back-button/themed-results-back-button.component';
import { ThemedThumbnailComponent } from 'src/app/thumbnail/themed-thumbnail.component';
import { CollectionsComponent } from 'src/app/item-page/field-components/collections/collections.component';
import { ThemedMediaViewerComponent } from 'src/app/item-page/media-viewer/themed-media-viewer.component';
import { MiradorViewerComponent } from 'src/app/item-page/mirador-viewer/mirador-viewer.component';
import { ThemedFileSectionComponent } from 'src/app/item-page/simple/field-components/file-section/themed-file-section.component';
import { ItemPageAbstractFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/abstract/item-page-abstract-field.component';
import { ItemPageDateFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/date/item-page-date-field.component';
import { GenericItemPageFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/generic/generic-item-page-field.component';
import { ThemedItemPageTitleFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/title/themed-item-page-field.component';
import { ItemPageUriFieldComponent } from 'src/app/item-page/simple/field-components/specific-field/uri/item-page-uri-field.component';
import { ThemedMetadataRepresentationListComponent } from 'src/app/item-page/simple/metadata-representation-list/themed-metadata-representation-list.component';
import { RelatedItemsComponent } from 'src/app/item-page/simple/related-items/related-items-component';
import { ItemComponent } from 'src/app/item-page/simple/item-types/shared/item.component';
import { MetadataUriValuesComponent } from 'src/app/item-page/field-components/metadata-uri-values/metadata-uri-values.component';
import { CollectionsWithParentComponent } from 'src/themes/sistedes/app/item-page/field-components/collections/collections-with-parent.component';
import { ItemPageLicenseFieldComponent } from 'src/themes/sistedes/app/item-page/simple/field-components/license/item-page-license-field.component';

/**
 * Component that represents a conference publication Item page
 */

@listableObjectComponent('Artículo', ViewMode.StandalonePage)
@listableObjectComponent('Resumen', ViewMode.StandalonePage)
@listableObjectComponent('Preliminares', ViewMode.StandalonePage)
@listableObjectComponent('Seminario', ViewMode.StandalonePage)
@listableObjectComponent('Boletín', ViewMode.StandalonePage)
@listableObjectComponent('Acta', ViewMode.StandalonePage)
@Component({
  selector: 'ds-sistedes-publication',
  templateUrl: './sistedes-publication.component.html',
  styleUrls: [ './sistedes-publication.component.scss', ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass,
    ThemedResultsBackButtonComponent,
    MiradorViewerComponent,
    ThemedItemPageTitleFieldComponent,
    DsoEditMenuComponent,
    MetadataFieldWrapperComponent,
    ThemedThumbnailComponent,
    ThemedMediaViewerComponent,
    ThemedFileSectionComponent,
    ItemPageDateFieldComponent,
    ThemedMetadataRepresentationListComponent,
    GenericItemPageFieldComponent,
    RelatedItemsComponent,
    ItemPageAbstractFieldComponent,
    ItemPageUriFieldComponent,
    CollectionsComponent,
    RouterLink,
    AsyncPipe,
    TranslateModule,
    MetadataUriValuesComponent,
    CollectionsWithParentComponent,
    ItemPageLicenseFieldComponent,
    NgbNavModule,
],
})
export class SistedesPublicationComponent extends ItemComponent {
}
