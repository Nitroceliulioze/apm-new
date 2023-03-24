import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  template: `<h1>{{ pageTitle }} </h1>
  <app-product-list></app-product-list>`
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}
