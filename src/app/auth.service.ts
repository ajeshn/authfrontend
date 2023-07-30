import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}
  // private _registerUrl = "http://localhost:3000/api/register";
  // private _loginUrl = "http://localhost:3000/api/login";
  private _registerUrl =
    'https://node-authehtication.onrender.com/api/register';
  private _loginUrl = 'https://node-authehtication.onrender.com/api/login';
  registerUser(user: any) {
    console.log(user);

    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
