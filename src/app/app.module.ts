import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

// importing our components from the .ts files
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product.list.component';

import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert.to.spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  // This metadata defines which of our components are part of this module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],

  // In the imports array, we define which third-part modules must be imported to this module and consenquently,
  // available for this module components (templates)
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  // bootstrap array defines the starter component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
