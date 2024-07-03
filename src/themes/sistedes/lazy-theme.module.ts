import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { RootModule } from '../../app/root.module';
import { HomePageComponent } from './app/home-page/home-page.component';
import { AdminSidebarComponent } from './app/admin/admin-sidebar/admin-sidebar.component';
import { CollectionPageComponent } from './app/collection-page/collection-page.component';
import { CommunityPageComponent } from './app/community-page/community-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { FileDownloadLinkComponent } from './app/shared/file-download-link/file-download-link.component';
import { LogoutPageComponent } from './app/logout-page/logout-page.component';
import { MediaViewerVideoComponent } from './app/item-page/media-viewer/media-viewer-video/media-viewer-video.component';
import { FileSectionComponent } from './app/item-page/simple/field-components/file-section/file-section.component';
import { FullFileSectionComponent } from './app/item-page/full/field-components/file-section/full-file-section.component';

const DECLARATIONS = [
];

@NgModule({
  imports: [
    RootModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    ScrollToModule,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    FormsModule,
    HomePageComponent,
    AdminSidebarComponent,
    CollectionPageComponent,
    CommunityPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    FileSectionComponent,
    FullFileSectionComponent,
    FileDownloadLinkComponent,
    MediaViewerVideoComponent,
  ],
  declarations: DECLARATIONS,
})

/**
 * This module serves as an index for all the components in this theme.
 * It should import all other modules, so the compiler knows where to find any components referenced
 * from a component in this theme
 * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
 * to give lazily loaded components a context in which they can be compiled successfully
 */
class SistedesLazyThemeModule {
}
