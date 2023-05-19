import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { combineLatest as combineLatest, Observable } from 'rxjs';
import { MenuID } from '../../../app/shared/menu/menu-id.model';
import { MenuItemType } from '../../../app/shared/menu/menu-item-type.model';
import { LinkMenuItemModel } from '../../../app/shared/menu/menu-item/models/link.model';
import { BrowseService } from '../../../app/core/browse/browse.service';
import { MenuService } from '../../../app/shared/menu/menu.service';
import { map } from 'rxjs/operators';
import { AuthorizationDataService } from '../../../app/core/data/feature-authorization/authorization-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptDataService } from '../../../app/core/data/processes/script-data.service';
import { MenuResolver } from '../../../app/menu.resolver';

const SISTEDES_MENUS = [
  {
    id: 'about',
    active: false,
    visible: true,
    index: 10,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.about',
      link: '/about'
    } as LinkMenuItemModel
  },
  {
    id: 'rights',
    active: false,
    visible: true,
    index: 10,
    model: {
      type: MenuItemType.LINK,
      text: 'menu.section.rights',
      link: '/rights'
    } as LinkMenuItemModel
  }
]

@Injectable({
  providedIn: 'root'
})
export class SistedesMenuResolver extends MenuResolver implements Resolve<boolean> {
  constructor(
    protected menuService: MenuService,
    protected browseService: BrowseService,
    protected authorizationService: AuthorizationDataService,
    protected modalService: NgbModal,
    protected scriptDataService: ScriptDataService,
  ) {
    super(menuService, browseService, authorizationService, modalService, scriptDataService)
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return combineLatest([
      this.createPublicMenu$(),
    ]).pipe(
      map((menusDone: boolean[]) => menusDone.every(Boolean)),
    );
  }

  /**
   * Initialize Sistedes menu sections and items for {@link MenuID.PUBLIC}
   */
  createPublicMenu$(): Observable<boolean> {
    SISTEDES_MENUS.forEach((menuSection) => this.menuService.addSection(MenuID.PUBLIC, Object.assign(menuSection, {
      shouldPersistOnRouteChange: true
    })));
    return this.waitForMenu$(MenuID.PUBLIC);
  }
}
