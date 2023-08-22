import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategoryService } from 'src/app/Services/product-category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ProductCategoryModel } from 'src/app/models/product-category-model';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  productCategories!: ProductCategoryModel[];

  constructor(private categoryService: ProductCategoryService, private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {


    this.categoryService.getAll().subscribe(data => this.productCategories = data);
  }


  saveData(product: ProductModel) {

    this.productService.add(product).subscribe(s => {

      alert('Done!');


      this.router.navigate(['products']);

    });
  }

}
