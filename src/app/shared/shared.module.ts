import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    NavComponent,
    SharedComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    NavComponent,
    SharedComponent,
  ]
})
export class SharedModule { }
