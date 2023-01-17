import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productHttpService: ProductHttpServiceService) {

  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
  }

  getProducts() {
    const url = 'http://api.escuelajs.co/api/v1/products';
    const response = this.productHttpService.getAll().subscribe
      (response => { console.log(response) });
  }

  getProduct() {
    const url = 'http://api.escuelajs.co/api/v1/products/20';
    const response = this.productHttpService.getOne(2).subscribe
      (response => { console.log(response) });
  }

  createProduct() {
    const data = {
      title: "Zapatos",
      price: 25,
      description: "Deportivos / Leonel Sangolquiza",
      images: ['http://api.lorem.space/image/furniture?w=640&h=480&r=8718'],
      category: 1,
    }
    const url = 'http://api.escuelajs.co/api/v1/products';
    this.productHttpService.store(data).subscribe(response => { console.log(response)
    });
  }

  updateProduct() {
    const data = {
      title: "Camisetas",
      price: 15,
      description: "Deportivos / Leonel Sangolquiza",
    }
    const url = 'http://api.escuelajs.co/api/v1/products/226';
    this.productHttpService.update(url,data).subscribe(response => { console.log(response)
    });
  }
}
