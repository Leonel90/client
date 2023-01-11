import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoFoundComponent } from '../noFoundPages/no-found/no-found.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //Rutas protegidas
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
    ]
  }

  //{path: '', redirectTo:'/dashboard', pathMatch:'full'},
  // {path:'**',component: NoFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
