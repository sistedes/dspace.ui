import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeaderComponent } from './app/header/header.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { RootModule } from '../../app/root.module';
import { NavbarModule } from '../../app/navbar/navbar.module';
import { ItemPageModule } from '../../app/item-page/item-page.module';
import { FooterComponent } from './app/footer/footer.component';
import { ItemSharedModule } from '../../app/item-page/item-shared.module';
import { SharedBrowseByModule } from '../../app/shared/browse-by/shared-browse-by.module';
import { ResultsBackButtonModule } from '../../app/shared/results-back-button/results-back-button.module';
import { DsoPageModule } from '../../app/shared/dso-page/dso-page.module';
import { AuthorComponent } from './app/entity-groups/sistedes-entities/item-pages/author/author.component';
import { AuthorListElementComponent } from './app/entity-groups/sistedes-entities/item-list-elements/author/author-list-element.component';
import { AuthorSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/author/author-search-result-list-element.component';
import { AuthorGridElementComponent } from './app/entity-groups/sistedes-entities/item-grid-elements/author/author-grid-element.component';
import { AuthorSearchResultGridElementComponent } from './app/entity-groups/sistedes-entities/search-result-grid-elements/author/author-search-result-grid-element.component';
import { SistedesPublicationSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/sistedes-publication/sistedes-publication-search-result-list-element.component';
import { SistedesPublicationListElementComponent } from './app/entity-groups/sistedes-entities/item-list-elements/sistedes-publication/sistedes-publication-list-element.component';
import { SistedesPublicationSearchResultGridElementComponent } from './app/entity-groups/sistedes-entities/search-result-grid-elements/sistedes-publication/sistedes-publication-search-result-grid-element.component';
import { ProceedingsPublicationSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/proceedings-publication/proceedings-publication-search-result-list-element.component';
import { ProceedingsPublicationListElementComponent } from './app/entity-groups/sistedes-entities/item-list-elements/proceedings-publication/proceedings-publication-list-element.component';
import { SistedesPublicationComponent } from './app/entity-groups/sistedes-entities/item-pages/sistedes-publication/sistedes-publication.component';
import { AuthorItemMetadataListElementComponent } from './app/entity-groups/sistedes-entities/metadata-representations/author/author-item-metadata-list-element.component';
import { CollectionsWithParentComponent } from './app/item-page/field-components/collections/collections-with-parent.component';


/**
 * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
 * This will ensure that decorator gets picked up when the app loads
 */
const ENTRY_COMPONENTS = [
  AuthorItemMetadataListElementComponent,
  SistedesPublicationComponent,
  SistedesPublicationListElementComponent,
  SistedesPublicationSearchResultListElementComponent,
  SistedesPublicationSearchResultGridElementComponent,
  ProceedingsPublicationListElementComponent,
  ProceedingsPublicationSearchResultListElementComponent,
  AuthorComponent,
  AuthorListElementComponent,
  AuthorGridElementComponent,
  AuthorSearchResultListElementComponent,
  AuthorSearchResultGridElementComponent,
  CollectionsWithParentComponent

];

const DECLARATIONS = [
  ...ENTRY_COMPONENTS,
  HomeNewsComponent,
  HeaderComponent,
  HeaderNavbarWrapperComponent,
  NavbarComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RootModule,
    NavbarModule,
    SharedBrowseByModule,
    ResultsBackButtonModule,
    ItemPageModule,
    ItemSharedModule,
    DsoPageModule,
  ],
  declarations: DECLARATIONS,
  providers: [
    ...ENTRY_COMPONENTS.map((component) => ({provide: component}))
  ],
})
/**
 * This module is included in the main bundle that gets downloaded at first page load. So it should
 * contain only the themed components that have to be available immediately for the first page load,
 * and the minimal set of imports required to make them work. Anything you can cut from it will make
 * the initial page load faster, but may cause the page to flicker as components that were already
 * rendered server side need to be lazy-loaded again client side
 *
 * Themed EntryComponents should also be added here
 */
export class SistedesEagerThemeModule {
}
