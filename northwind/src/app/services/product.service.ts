import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44340/api/Products/getall';

  constructor(private httpClient: HttpClient) { }
  
  getProducts() :Observable<ProductResponseModel>{
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}