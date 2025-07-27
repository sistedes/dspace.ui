import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { MenuItemType } from 'src/app/shared/menu/menu-item-type.model';
import { PartialMenuSection } from 'src/app/shared/menu/menu-provider.model';
import { AbstractExpandableMenuProvider } from 'src/app/shared/menu/providers/helper-providers/expandable-menu-provider';

/**
 * Menu provider to create the "About..." menu (and subsections) in the top bar
 */
@Injectable()
export class AboutMenuProvider extends AbstractExpandableMenuProvider {
  constructor(
  ) {
    super();
  }

  public getTopSection(): Observable<PartialMenuSection> {
    return of(
      {
        model: {
          type: MenuItemType.TEXT,
          text: 'menu.section.about-ellipsis',
        },
        visible: true,
        index: 2,
      },
    );
  }

  public getSubSections(): Observable<PartialMenuSection[]> {
    return of([
      {
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.about',
          link: '/about',
        },
      },
      {
        visible: true,
        model: {
          type: MenuItemType.LINK,
          text: 'menu.section.authors-info',
          link: '/authors-info'
        },
      },
    ]);
  }
}
