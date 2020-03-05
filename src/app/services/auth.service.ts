import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor( private http: HttpClient, 
    @Inject('apiUrl') private apiUrl: string ) { }

  
    signup(credentials: {}) {
      return this.http.post(`${this.apiUrl}/signup`, credentials);
    }

    login(credentials: {}){
      return this.http.post(`${this.apiUrl}/login`, credentials);
    }

    logout() {
      return this.http.get(`${this.apiUrl}/logout`);
    }

}
