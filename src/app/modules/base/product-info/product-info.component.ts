import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { Product, ProductFeature } from 'src/app/models/base/Product';
import { ProductService } from 'src/app/services/base/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor(private fb: FormBuilder, private productService: ProductService) { }
  productForm;

  ngOnInit() {

    let arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(this.generateProductFeature())

    }

    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      body: [''],
      productDetails: this.fb.group({
        code: [''],
        serial: ['']
      }),
      features: this.fb.array(arr)
    });
  }

  generateProductFeature(): FormGroup {
    return this.fb.group({
      title: [''],
      type: [''],
      sort: ['']
    })
  }

  changeCategory($event){
  }



  get features() {
    return this.productForm.get('features') as FormArray;
  }

  addFeatures() {
    this.features.push(this.generateProductFeature());
  }

  saveData() {
    console.log(this.productForm);
    const product = new Product();
    product.productName = this.productForm.value.productName;
    product.categoryId = this.productForm.value.categoryId;
    product.price = this.productForm.value.price;
    for (let index = 0; index < this.productForm.value.features.length; index++) {
      const element = this.productForm.value.features[index];
      const feature = new ProductFeature();
      feature.title = element.title;
      feature.featureType = element.type;
      feature.sortOrder = element.sort;
      product.features.push(feature);
    }

    this.productService.add(product);
    alert('ذخیره محصول با موفقیت انجام شد')
    this.productForm.reset();

  }

}
