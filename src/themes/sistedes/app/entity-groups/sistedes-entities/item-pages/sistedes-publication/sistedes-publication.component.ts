import {
  AsyncPipe,
  NgClass,
  NgIf,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
import { RouteService } from 'src/app/core/services/route.service';
import { MetadataValue } from 'src/app/core/shared/metadata.models';
import { MetadataUriValuesComponent } from 'src/app/item-page/field-components/metadata-uri-values/metadata-uri-values.component';
import { Citation } from 'src/themes/sistedes/app/shared/citations/citation-util.module';
import { CollectionsWithParentComponent } from 'src/themes/sistedes/app/item-page/field-components/collections/collections-with-parent.component';

/**
 * Component that represents a conference publication Item page
 */

@listableObjectComponent('Artículo', ViewMode.StandalonePage)
@listableObjectComponent('Resumen', ViewMode.StandalonePage)
@listableObjectComponent('Preliminares', ViewMode.StandalonePage)
@listableObjectComponent('Boletín', ViewMode.StandalonePage)
@listableObjectComponent('Seminario', ViewMode.StandalonePage)
@Component({
  selector: 'ds-sistedes-publication',
  templateUrl: './sistedes-publication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
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
    AsyncPipe,TranslateModule,
    MetadataUriValuesComponent,
    CollectionsWithParentComponent,
  ],
})
export class SistedesPublicationComponent extends ItemComponent {

  citation: Citation = null;
  showCite = false;
  showBibtex = false;

  constructor(protected sanitizer: DomSanitizer, protected routeService: RouteService, protected router: Router) {
    super(routeService, router);
  }

  bibtexFile(): SafeResourceUrl {
    const blob = new Blob([this.getBibStrip()], { type: 'application/octet-stream' });
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
  }

  clickShowCite(): void {
    this.showBibtex = false;
    this.showCite = !this.showCite;
  }

  clickShowBibtex(): void {
    this.showCite = false;
    this.showBibtex = !this.showBibtex;
  }

  getBibId(): string {
    return this.getCitation().getHandle().replace(/\//g,':');
  }

  getBibFilename(): string {
    return this.getCitation().getHandle().replace(/\//g,'-') + '.bib';
  }

  getCiteStrip(): string {
    return this.getCitation().asTextCitation();
  }

  getBibStrip(): string {
    return this.getCitation().asBibTexCitation();
  }

  getUriMetadata(): MetadataValue[] {
    let value = new MetadataValue();
    value.value = this.getCitation().getUri();
    return [ value ];
  }

  getCitation(): Citation {
    if (this.citation == null) {
      this.citation = Citation.from(this.object);
    }
    return this.citation;
  }
}
