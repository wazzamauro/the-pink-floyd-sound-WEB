import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Person } from '../person';

@Injectable({
  providedIn: 'root'
})
export class PersonServicesService {
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
  constructor(private http: HttpClient) { }

  importPerson(): Observable<string> {
   return this.http.get<string>('http://localhost:8080/api/person/import');
  }

  fetchPerson(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:8080/api/person/get');
  }
}
