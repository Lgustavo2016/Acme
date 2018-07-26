import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

//importing our components from the .ts files
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product.list.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  //This metadata defines which of our components are part of this module
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  //In the imports array, we define which third-part modules must be imported to this module and consenquently,
  //available for this module components (templates)
  imports: [
    BrowserModule,
    FormsModule
  ],
  //bootstrap array defines the starter component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
