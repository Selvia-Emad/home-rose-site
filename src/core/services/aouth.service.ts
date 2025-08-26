import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/main';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AouthService {

 private api = "https://flower.elevateegy.com/api/v1/auth/";

  constructor(private _http: HttpClient) {}

 signup(data: {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  rePassword: string,
  phone: string,
  gender: string
}): Observable<any> {
  return this._http.post(`${this.api}signup`, data);
}



  signin(data: {
    email: string,
    password: string,
  }): Observable<any> {
    return this._http.post(`${this.api}signin`, data);
  }

 forgotPassword(payload:{email: string}): Observable<any> {
    return this._http.post(`${this.api}forgotPassword`, payload);



}
verifyResetCode(data: { resetCode: string }) {
  return this._http.post(`${this.api}verifyResetCode`, data);
}
resetPassword(data: { email: string; newPassword: string }) {
  return this._http.put(`${this.api}forgotPassword`, data);
}

}
