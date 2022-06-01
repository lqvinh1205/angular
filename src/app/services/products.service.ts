import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductElement } from '../shared/models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = "http://localhost:3000/products"
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<ProductElement[]> {
    return this.http.get<ProductElement[]>(this.API_URL)
  }
  createProduct(data: ProductElement): Observable<ProductElement> {
    return this.http.post<ProductElement>(this.API_URL, data)
  }
  removeProduct(id: any): Observable<ProductElement> {
    return this.http.delete<ProductElement>(`${this.API_URL}/${id}`)
  }
  updateProduct(data: ProductElement): Observable<ProductElement> {
    return this.http.put<ProductElement>(`${this.API_URL}/${data.id}`, data)
  }
  getProduct(id: any): Observable<ProductElement> {
    return this.http.get<ProductElement>(`${this.API_URL}/${id}`)
  }
}
