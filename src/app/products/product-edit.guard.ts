import { ProductEditComponent } from './product-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(
    component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
      if (component.productForm.dirty) {
        const productName = component.productForm.get('productName')?.value || 'New Product';
        return confirm(`Navigate away and loose all changes to ${productName}?`)
      }
    return true;
  }
  
}
