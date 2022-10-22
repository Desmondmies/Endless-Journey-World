import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ErrorComponent} from "./components/error/error.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent },
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
