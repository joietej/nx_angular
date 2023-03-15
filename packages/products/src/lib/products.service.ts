import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "./products.models";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

}
