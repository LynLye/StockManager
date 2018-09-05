import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
