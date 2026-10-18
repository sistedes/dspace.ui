import { AuthorGridElementComponent } from './app/entity-groups/sistedes-entities/item-grid-elements/author/author-grid-element.component';
import { AuthorListElementComponent } from './app/entity-groups/sistedes-entities/item-list-elements/author/author-list-element.component';
import { SistedesPublicationListElementComponent } from './app/entity-groups/sistedes-entities/item-list-elements/sistedes-publication/sistedes-publication-list-element.component';
import { AuthorComponent } from './app/entity-groups/sistedes-entities/item-pages/author/author.component';
import { SistedesPublicationComponent } from './app/entity-groups/sistedes-entities/item-pages/sistedes-publication/sistedes-publication.component';
import { AuthorSearchResultGridElementComponent } from './app/entity-groups/sistedes-entities/search-result-grid-elements/author/author-search-result-grid-element.component';
import { SistedesPublicationSearchResultGridElementComponent } from './app/entity-groups/sistedes-entities/search-result-grid-elements/sistedes-publication/sistedes-publication-search-result-grid-element.component';
import { AuthorSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/author/author-search-result-list-element.component';
import { ProceedingsPublicationSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/proceedings-publication/proceedings-publication-search-result-list-element.component';
import { SistedesPublicationSearchResultListElementComponent } from './app/entity-groups/sistedes-entities/search-result-list-elements/sistedes-publication/sistedes-publication-search-result-list-element.component';

/**
 * Add components that use the @listableObjectComponent decorator here.
 * This will ensure that the decorators get picked up when the app loads
 */
export const LISTABLE_COMPONENTS = [
  AuthorComponent,
  AuthorListElementComponent,
  AuthorGridElementComponent,
  AuthorSearchResultListElementComponent,
  AuthorSearchResultGridElementComponent,
  SistedesPublicationComponent,
  SistedesPublicationListElementComponent,
  SistedesPublicationSearchResultListElementComponent,
  SistedesPublicationSearchResultGridElementComponent,
  SistedesPublicationListElementComponent,
  ProceedingsPublicationSearchResultListElementComponent,
];
