import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryModel } from '../models/product-category-model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private categoryURL = "productcategories";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, @Inject("PROD_API_URL") private PROD_API_URL: string) {


  }


  getAll(): Observable<ProductCategoryModel[]> {

    return this.http.get<ProductCategoryModel[]>(`${this.PROD_API_URL}${this.categoryURL}`, this.httpOptions);
  }
}
