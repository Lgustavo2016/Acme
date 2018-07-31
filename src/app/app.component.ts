import { Component } from '@angular/core'
//
@Component({
  //Selector is the name of this component when using it as a directive in HTML
  selector: 'pm-root',
  //Template is the HTML content that will be displayed between the custom directive defined above
  template: `
<nav class='navbar navbar-expand navbar-light bg-light'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class='nav nav-pills'>
<li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
<li><a class='nav-link' [routerLink]="['/products']">Product</a></li>
</ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>
`
})

//The 'export' keyword, make our class public
export class AppComponent {
  //Property/Type/Default Value
  pageTitle: string = "Acme Product Management";
} 