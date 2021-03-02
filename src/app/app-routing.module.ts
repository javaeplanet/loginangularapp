import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincredComponent } from './logincred/logincred.component'
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'', pathMatch:'full'},
  
  {
    path:'displayDashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
