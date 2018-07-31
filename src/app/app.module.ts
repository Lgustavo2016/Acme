import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

// importing our components from the .ts files
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product.list.component';

import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert.to.spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product.detail.component'
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // This metadata defines which of our components are part of this module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],

  // In the imports array, we define which third-part modules must be imported to this module and consenquently,
  // available for this module components (templates)
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //We use Router module to define the routes of our application
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],

  // bootstrap array defines the starter component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
