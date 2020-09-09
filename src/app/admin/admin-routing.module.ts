import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'dashboard',  component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'category',  component:CategoryComponent, canActivate:[AuthGuard]},
  {path:'product',  component:ProductComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
