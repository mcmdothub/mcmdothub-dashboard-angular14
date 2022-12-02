import { NgModule } from '@angular/core';
import { AccountComponent } from './components/layouts/account/account.component';
import { DashboardComponent } from './components/layouts/dashboard/dashboard.component';
import { AuthorizeDirective } from './directives/authorize.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    AuthorizeDirective
  ],
  // we want the available outside this model
  exports: [
    AccountComponent,
    DashboardComponent,
    AuthorizeDirective,
    HttpClientModule,
    RouterModule
  ],
  imports: [
    HttpClientModule,
    RouterModule
  ]
})
export class CoreModule { }
