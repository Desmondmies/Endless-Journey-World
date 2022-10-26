import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./components/error/error.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {EntriesPageComponent} from "./components/entries-page/entries-page.component";
import {EntryPageComponent} from "./components/entry-page/entry-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'entries/:id', component: EntriesPageComponent },
      { path: 'entry/:id', component: EntryPageComponent },
      { path: '404', component: ErrorComponent }, //404 & ** PATH NEED TO BE LAST IN THIS ARRAY, ADD OTHER PATH ABOVE
      { path: '**', redirectTo: '404' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
