import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiCallComponent } from './api-call/api-call.component';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './product/home/home.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ServicewithsubjectComponent } from './component-store-alternative/servicewithsubject/servicewithsubject.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {path: 'ApiCallComponent', component: ApiCallComponent},
  {path: 'BasicComponent', component: BasicComponent},
  {path: 'HomeComponent', component: HomeComponent},
  {path: 'CustomerComponent', component: CustomerComponent},
  {path: 'ServicewithsubjectComponent', component: ServicewithsubjectComponent},
  {path: 'CounterComponent', component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
