import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../modals/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = `http://localhost:2222/products`;
  constructor(private http: HttpClient) {}
  getProduct(id: any): Observable<IProduct> {
    console.log(id);

    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  removeProduct(id: any): Observable<IProduct> {
    console.log(id);
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }
  createProduct(data: any): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, data);
  }
}
