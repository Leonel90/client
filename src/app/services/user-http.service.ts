import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateUserDto, UpdateUserDto, UserModel } from '../entities/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  readonly API_UR = 'http://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {}


  getAll(): Observable<UserModel[]> {
    const url = `${this.API_UR}`;
    return this.httpClient.get<UserModel[]>(url);
  }

  getOne(id: UserModel['id']): Observable<UserModel[]> {
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.get<UserModel[]>(url);
  }

  store(product: CreateUserDto): Observable<UserModel> {
    const url = `${this.API_UR}`;
    return this.httpClient.post<UserModel>(url, product);
  }

  update(id: UserModel['id'], user: UpdateUserDto): Observable<UserModel> {
    const url = `${this.API_UR}/${id}`;/*Recuest hacemos la peticion*/
    return this.httpClient.put<UserModel>(url, user);/*Respons recibimos la respuesta*/
  }

  destroy(id: UserModel['id']): Observable<any> {
    const url = `${this.API_UR}/${id}`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean }) => {
      return response.rta;
    }));
  }
}
