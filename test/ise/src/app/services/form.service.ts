import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  public apiBasePath = '/identity/api/v1';
  public createUserUrl = `http://101.92.165.11:3001/identity/api/v1/users`;
  public countriesUrl = `http://101.92.165.11:3001/identity/api/v1/countries`;
  public forgotPasswordUrl = `${this.apiBasePath}/users/forgot-password`;
  public authTokenUrl = `http://101.92.165.11:3001/identity/api/v1/auth/token`;
  public resetPasswordUrl = `${this.apiBasePath}/users/reset-password`;
  public setPasswordUrl = `http://101.92.165.11:3001/identity/api/v1/users/set-password`;
  constructor(private http: HttpClient) { }
  // 创建用户
  createUser(postData) {
    return this.http.post<any>(this.createUserUrl, postData);
  }
  // 获取conturies;
  getCountries() {
    return this.http.get<any>(this.countriesUrl);
  }
  authToken(postData) {
    return this.http.post<any>(this.authTokenUrl, postData);
  }
}
