import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_UR = 'http://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {

  }

  getAll():Observable<ProductModel[]>{
    const url = `${this.API_UR}`;
    return this.httpClient.get<ProductModel[]>(url);
  }

  getOne(id: ProductModel):Observable<ProductModel>{
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.get<ProductModel>(url);
  }

  store(product: CreateProductDto):Observable<ProductModel>{
    const url = `${this.API_UR}`;
    return this.httpClient.post<ProductModel>(url, product);
  }

  update(id: ProductModel, product: UpdateProductDto):Observable<ProductModel>{
    const url = `${this.API_UR}/${id}`;/*Recuest hacemos la peticion*/
    return this.httpClient.put<ProductModel>(url, product);/*Respons recibimos la respuesta*/
  }

  destroy(id: ProductModel){
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.delete(url);
  }
}
