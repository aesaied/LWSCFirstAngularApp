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


  getForDataTable(dataTablesParameters: any): Observable<any> {

    console.log(dataTablesParameters);

    var columnId = dataTablesParameters.order[0].column;
    var sortDir = dataTablesParameters.order[0].dir;


    if (!columnId) {
      columnId = 0;
    }


    var param = { draw: dataTablesParameters.draw, sortColumn: dataTablesParameters.columns[columnId].data, sortDirection: sortDir, pageSize: dataTablesParameters.length, SkipCount: dataTablesParameters.start, searchText: dataTablesParameters.search.value };
    console.log(param);
    //alert(JSON.stringify(param));
    return this.http.get<any>(`${this.PROD_API_URL}${this.productURL}/GetPagedResult`, { params: param, ...this.httpOptions });

  }


  delete(productId: Number): Observable<any> {

    return this.http.delete(`${this.PROD_API_URL}${this.productURL}/` + productId, this.httpOptions);
  }


  add(product: ProductModel) {

    return this.http.post(`${this.PROD_API_URL}${this.productURL}`, product, this.httpOptions);
  }
}
