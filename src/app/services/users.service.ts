import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserElement } from '../shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }
  signup(data: UserElement): Observable<UserElement> {
    return this.http.post<UserElement>(this.API_URL, data)
  }
}
