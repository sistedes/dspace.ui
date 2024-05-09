import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuID } from '../../../app/shared/menu/menu-id.model';
import { MenuItemType } from '../../../app/shared/menu/menu-item-type.model';
import { LinkMenuItemModel } from '../../../app/shared/menu/menu-item/models/link.model';
import { BrowseService } from '../../../app/core/browse/browse.service';
import { MenuService } from '../../../app/shared/menu/menu.service';
import { AuthorizationDataService } from '../../../app/core/data/feature-authorization/authorization-data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptDataService } from '../../../app/core/data/processes/script-data.service';
import { MenuResolverService } from 'src/app/menu-resolver.service';
import { ConfigurationDataService } from 'src/app/core/data/configuration-data.service';
import { TextMenuItemModel } from 'src/app/shared/menu/menu-item/models/text.model';


/**
 * Initialize Sistedes menus
 */
export const sistedesMenuResolver: ResolveFn<boolean> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  menuResolverService: SistedesMenuResolverService = inject(SistedesMenuResolverService),
): Observable<boolean> => {
  return menuResolverService.resolve(route, state);
};


@Injectable({
  providedIn: 'root'
})
class SistedesMenuResolverService extends MenuResolverService {

  readonly SISTEDES_MENUS = [
    {
      id: 'about-ellipsis',
      active: false,
      visible: true,
      index: 2,
      model: {
        type: MenuItemType.TEXT,
        text: 'menu.section.about-ellipsis',
      } as TextMenuItemModel,
    },
    {
      id: 'about',
      active: false,
      visible: true,
      parentID: 'about-ellipsis',
      index: 2,
      model: {
        type: MenuItemType.LINK,
        text: 'menu.section.about',
        link: '/about'
      } as LinkMenuItemModel
    },
    {
      id: 'authors-info',
      active: false,
      visible: true,
      parentID: 'about-ellipsis',
      index: 2,
      model: {
        type: MenuItemType.LINK,
        text: 'menu.section.authors-info',
        link: '/authors-info'
      } as LinkMenuItemModel
    }
  ];

  constructor(
    protected menuService: MenuService,
    protected browseService: BrowseService,
    protected authorizationService: AuthorizationDataService,
    protected modalService: NgbModal,
    protected scriptDataService: ScriptDataService,
    protected configurationDataService: ConfigurationDataService,
  ) {
    super(menuService, browseService, authorizationService, modalService, scriptDataService, configurationDataService);
  }

  /**
   * Initialize Sistedes menu sections and items for {@link MenuID.PUBLIC}
   */
  createPublicMenu$(): Observable<boolean> {
    this.SISTEDES_MENUS.forEach((menuSection) => this.menuService.addSection(MenuID.PUBLIC, Object.assign(menuSection, {
      shouldPersistOnRouteChange: true
    })));
    return this.waitForMenu$(MenuID.PUBLIC);
  }
}
