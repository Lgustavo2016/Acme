import { Component } from '@angular/core'
//
@Component({
  //Selector is the name of this component when using it as a directive in HTML
  selector: 'pm-root',
  //Template is the HTML content that will be displayed between the custom directive defined above
  template: `
<div><h1>{{pageTitle}}</h1>
<div><pm-products></pm-products></div>
</div>
`
})

//The 'export' keyword, make our class public
export class AppComponent {
  //Property/Type/Default Value
  pageTitle: string = "Acme Product Management";
} 