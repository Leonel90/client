import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_UR = 'http://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {

  }

  getAll(){
    const url = `${this.API_UR}`;
    return this.httpClient.get(url);
  }

  getOne(id: number){
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.get(url);
  }

  store(product:ProductModel){
    const url = `${this.API_UR}`;
    return this.httpClient.post(url, product);
  }

  update(id: number, product:ProductModel){
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.put(url, product);
  }

  destroy(id: number){
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.delete(url);
  }
}
