import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
