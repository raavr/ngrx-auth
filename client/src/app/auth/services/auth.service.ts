import { Injectable } from '@angular/core';
import { Credentials } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<Token> {
    return this.http.post('http://localhost:3000/login', credentials) as Observable<Token>;
  }

}