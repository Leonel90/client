import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];//inicalizamos el areglo
  selectedProduct: UpdateProductDto = {};
  
  constructor(private productHttpService: ProductHttpServiceService) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    this.deleteProduct();
  }

  getProducts(): void {
    //const url = 'http://api.escuelajs.co/api/v1/products';
    this.productHttpService.getAll().subscribe
      (response => {
        this.products = response;//asignamos a la bariable todo lo del objeto
        console.log(response)
      });
  }

  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/20';
    this.productHttpService.getOne(2).subscribe
      (response => {
        console.log(response)
      });
  }

  createProduct() {
    const data = {
      title: "Zapatos",
      price: 25,
      description: "Deportivos / Leonel Sangolquiza",
      images: ['http://api.lorem.space/image/furniture?w=640&h=480&r=8718'],
      categoryId: 1,
    }
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.productHttpService.store(data).subscribe
      (response => {
        console.log(response)
      });
  }

  editProduct(product: ProductModel){
    this.selectedProduct = product;
  }

  updateProduct() {
    const data = {
      title: "Camisetas",
      price: 15,
      description: "Deportivos / Leonel Sangolquiza",
      images: ['http://api.lorem.space/image/furniture?w=640&h=480&r=8718'],
      categoryId: 1
    }
    const url = 'http://api.escuelajs.co/api/v1/products/226';
    this.productHttpService.update(30, data).subscribe(response => {
      console.log(response)
    });
  }

  deleteProduct() {
    //const url = "https://api.escuelajs.co/api/v1/products/192";
    this.productHttpService.destroy(11).subscribe(
      response => {
        //this.products = this.products.filter(product => product.id != id);
        console.log(response);
      }
    );
  }
}
