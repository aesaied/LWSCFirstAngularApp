import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: ProductModel[];
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(

      products => this.products = products

    );

  }

}
