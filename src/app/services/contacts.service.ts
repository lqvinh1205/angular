import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactElement } from '../shared/models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  API_URL = "http://localhost:3001/contacts"
  constructor(private http: HttpClient) { }

  getAllContact(): Observable<ContactElement[]> {
    return this.http.get<ContactElement[]>(this.API_URL)
  }
  createContact(data: ContactElement): Observable<ContactElement> {
    return this.http.post<ContactElement>(this.API_URL, data)
  }
  removeContact(id: any): Observable<ContactElement> {
    return this.http.delete<ContactElement>(this.API_URL + `/${id}`)
  }
}
