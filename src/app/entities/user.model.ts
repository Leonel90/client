import { CategoryModel } from "./rol.model";

export interface UserModel {
  id:number;
  title:string;
  price:number;
  description:string;
  images:string[];
  category:CategoryModel;
}

export interface CreateUserDto extends Omit<UserModel, 'id' | 'category'> {
rolId: number;
}

export interface UpdateUserDto extends Partial<UserModel>{/*Dto significa Object Transfer Data*/
rolId?: number;/*La incognita significa q no es obligatorio*/
}
