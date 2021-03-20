import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './compenents/product/product.component';
import { CategoryComponent } from './compenents/category/category.component';
import { NaviComponent } from './compenents/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './compenents/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipe,
    CartSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
