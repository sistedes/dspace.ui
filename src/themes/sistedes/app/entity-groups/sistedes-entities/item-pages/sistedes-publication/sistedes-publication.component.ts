import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import { ItemComponent } from '../../../../../../../app/item-page/simple/item-types/shared/item.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouteService } from 'src/app/core/services/route.service';
import { Router } from '@angular/router';
import { Citation } from 'src/themes/sistedes/app/shared/citations/citation-util.module';
import { MetadataValue } from 'src/app/core/shared/metadata.models';


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
  styleUrls: ['./sistedes-publication.component.scss'],
  templateUrl: './sistedes-publication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SistedesPublicationComponent extends ItemComponent {

  citation: Citation = null
  showCite: boolean = false
  showBibtex: boolean = false

  constructor(protected sanitizer: DomSanitizer, protected routeService: RouteService, protected router: Router) { 
    super(routeService, router)
  }

  bibtexFile(): SafeResourceUrl {
    const blob = new Blob([this.getBibStrip()], { type: 'application/octet-stream' });
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
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
    return this.getCitation().getSistedesHandle().replace(/\//g,":");
  }
  
  getCiteStrip(): string {
    return this.getCitation().asTextCitation();
  }

  getBibStrip(): string {
    return this.getCitation().asBibTexCitation();
  }

  getUriMetadata(): MetadataValue[] {
    var value = new MetadataValue();
    value.value = this.getCitation().getSistedesUri();
    return [ value ];
  }

  getCitation(): Citation {
    if (this.citation == null) {
      this.citation = Citation.from(this.object);
    }
    return this.citation;
  }
}
