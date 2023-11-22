import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {HomeComponent} from "./components/home/home.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {CocoProductsComponent} from "./components/coco-products/coco-products.component";
import {OrdersComponent} from "./components/orders/orders.component";

const routes: Routes = [
  {
    path : '',
    redirectTo:'welcome',
    pathMatch: 'full'
  },

  {
    path: 'welcome',
    component:WelcomeComponent

  },
  {
    path: 'login',
    component:LoginComponent

  },
  {
    path: 'admin',
    component:AdminLayoutComponent,
    children: [

      {
        path: 'home',
        component:HomeComponent
      },

      {
        path: 'dashboard',
        component:DashboardComponent
      },

      {
        path: 'clients',
        component:ClientsComponent
      },

      {
        path: 'products',
        component:CocoProductsComponent
      },

      {
        path: 'orders',
        component:OrdersComponent
      },

      {
        path: 'settings',
        component:SettingsComponent
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
