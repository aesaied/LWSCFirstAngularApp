import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = "products";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, @Inject("PROD_API_URL") private PROD_API_URL: string) {


  }


  getAllProducts(): Observable<ProductModel[]> {

    return this.http.get<ProductModel[]>(`${this.PROD_API_URL}${this.productURL}`, this.httpOptions);
  }


  add(product: ProductModel) {

    return this.http.post(`${this.PROD_API_URL}${this.productURL}`, product, this.httpOptions);
  }
}
