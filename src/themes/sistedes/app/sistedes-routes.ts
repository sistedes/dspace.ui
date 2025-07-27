import { Route } from '@angular/router';
import { i18nBreadcrumbResolver } from '../../../app/core/breadcrumbs/i18n-breadcrumb.resolver';
import { APP_ROUTES } from 'src/app/app-routes';
import { AboutComponent } from './info/about/about.component';
import { AuthorsInfoComponent } from './info/authors-info/authors-info.component';


export const SISTEDES_APP_ROUTES: Route[] = APP_ROUTES.map(
  route => {
    // We look for the root (empty) path, and we add to its children the Sistedes Routes.
    // Note that the additions are added at the beginning, since the last element in 
    // 'route.children' is a fallback that shows a "Page not found error"
    if (route.path == '') {
      route.children = [
        {
          path: 'about',
          component: AboutComponent,
          pathMatch: 'full',
          resolve: {
            breadcrumb: i18nBreadcrumbResolver,
          },
          data: { title: 'menu.section.about', breadcrumbKey: 'menu.section.about' }
        },
        {
          path: 'authors-info',
          component: AuthorsInfoComponent,
          pathMatch: 'full',
          resolve: {
            breadcrumb: i18nBreadcrumbResolver,
          },
          data: { title: 'menu.section.authors-info', breadcrumbKey: 'menu.section.authors-info' }
        }
      ]
      .map((r) => r as Route)
      .concat(route.children);
    }
    return route;
  }
);