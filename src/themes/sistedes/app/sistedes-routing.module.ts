import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { I18nBreadcrumbResolver } from '../../../app/core/breadcrumbs/i18n-breadcrumb.resolver';
import { AboutComponent } from './info/about/about.component';
import { AuthorsInfoComponent } from './info/authors-info/authors-info.component';


@NgModule({
})
/**
 * Module for navigating to components within the info module
 */
export class SistedesRoutingModule {
  public static readonly ROUTES: Routes = [
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full',
        resolve: {
          breadcrumb: I18nBreadcrumbResolver,
        },
        data: { title: 'menu.section.about', breadcrumbKey: 'menu.section.about' }
      },
      {
        path: 'authors-info',
        component: AuthorsInfoComponent,
        pathMatch: 'full',
        resolve: {
          breadcrumb: I18nBreadcrumbResolver,
        },
        data: { title: 'menu.section.authors-info', breadcrumbKey: 'menu.section.authors-info' }
      }
  ];
}
