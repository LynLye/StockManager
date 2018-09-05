import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StocksComponent } from './stocks/stocks.component';
import { SearchComponent } from './search/search.component';

// TODO: add more rotues
const appRoutes: Routes = [
  {path: 'stocks', component: StocksComponent},
  {path: 'search', component: SearchComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
