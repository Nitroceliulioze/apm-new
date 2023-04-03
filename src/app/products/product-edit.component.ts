import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Observable, Subscription, fromEvent, merge } from 'rxjs';
import { IProduct } from './product';
import { GenericValidator } from '../shared/generic-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];
  pageTitle = 'Product Edit';
  errorMessage!: string;
  productForm!: FormGroup;

  product!: IProduct;
  private sub!: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages!: { [key: string]: { [key: string]: string; }; };
  private genericValidator!: GenericValidator;

  get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  constructor (private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', ratingRange(1, 5)],
      tags: this.fb.array([]),
      description: ''
    });

    // Read the product Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = Number(params.get('id'));
        this.getProduct(id);
      }
    );
  }

  getProduct(id: number) {

  }

  saveProduct() {

  }

  deleteTag() {

  }

  addTag() {

  }
  deleteProduct() {
    
  }
}
