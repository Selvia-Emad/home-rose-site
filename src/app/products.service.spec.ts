import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  // This service is provided at the root level, making it available throughout the application
  providedIn: 'root'
})
export class ProductsService {
  // Define the base URL for the API
  private apiUrl = 'https://fakestoreapi.com/products';

  // Inject the HttpClient service into the constructor
  // The underscore prefix (_http) is a common convention for private properties
  constructor(private _http: HttpClient) { }

  /**
   * Fetches all products from the API.
   * @returns An Observable of products.
   */
  getProducts(): Observable<any> {
    // Make a GET request to the API URL
    return this._http.get(this.apiUrl);
  }
}
