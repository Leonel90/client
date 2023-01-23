import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    httpClient: any;
    constructor(private userHttpService: UserHttpService) {

    }

    ngOnInit(): void {
      //this.getUsers();
      //this.getUser();
      //this.createUser();
      //this.updateUser();
      //this.deleteUser();
    }

    getUsers(): void {
      const url = 'http://api.escuelajs.co/api/v1/products';
      this.userHttpService.getAll().subscribe
        (response => {
          console.log(response)
        });
    }

    getUser() {
      const url = 'http://api.escuelajs.co/api/v1/products/20';
      this.userHttpService.getOne(2).subscribe
        (response => {
          console.log(response)
        });
    }

    createUser() {
      const data = {
        title: "Zapatos",
        price: 25,
        description: "Deportivos / Leonel Sangolquiza",
        images: ['http://api.lorem.space/image/furniture?w=640&h=480&r=8718'],
        rolId: 1
      }
      const url = 'http://api.escuelajs.co/api/v1/products';
      this.userHttpService.store(data).subscribe
        (response => {
          console.log(response)
        });
    }

    updateUser() {
      const data = {
        title: "Camisetas",
        price: 15,
        description: "Deportivos / Leonel Sangolquiza",
        images: ['http://api.lorem.space/image/furniture?w=640&h=480&r=8718'],
        rolId: 1
      }
      const url = 'http://api.escuelajs.co/api/v1/products/226';
      this.userHttpService.update(30, data).subscribe(response => {
        console.log(response)
      });
    }

    deleteUser() {
      const url = "https://api.escuelajs.co/api/v1/products/192";
      this.userHttpService.destroy(61).subscribe(
        response => {
          console.log(response);
        }
      );
    }
  }
