import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }


apiUrl="https://fakestoreapi.com/products"



getProducts():Observable<any>{


return this._http.get(this.apiUrl)


}




}
