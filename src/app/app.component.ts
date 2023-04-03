import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/welcome">Home</a></li>
        <li>
          <a
            class="nav-link"
            routerLink="/products"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Product List</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            routerLink="/products/0/edit"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Add Product</a
          >
        </li>
        <li><a class="nav-link" routerLink="/customers">Customers Form</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
