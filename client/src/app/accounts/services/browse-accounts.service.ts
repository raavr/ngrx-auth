import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/auth/models/user';
import { Observable } from 'rxjs';
import { ENDPOINT } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class BrowseAccountsService {

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<User[]> {
    return this.http.get<User[]>(`${ENDPOINT}/accounts`);
  }
}
