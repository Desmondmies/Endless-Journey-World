import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ErrorComponent },
      { path: '404', component: ErrorComponent },
      { path: '**', redirectTo: '404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
