import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../../../core/services/products.service';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  // Injecting the ProductsService to fetch data
  product_service = inject(ProductsService);

  // Array to hold the products data
  products: any[] = [];

  // Lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    console.log("component is intialized");
    this.getData();
  }

  // Method to fetch data from the service
  getData() {
    this.product_service.getProducts().subscribe({
      next: (data) => {
        console.log("data returned sucessfully");
        console.log(data);
        this.products = data;
      },
      error: (err) => {
        console.log("there is an error", err);
      },
      complete: () => {
        console.log("returning data is completed");
      }
    });
  }
}
