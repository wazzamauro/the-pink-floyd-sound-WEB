import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicianServicesService {

  constructor(private http: HttpClient) { }

  fetchMusician(): Observable<Object>{
    return this.http.get('http://localhost:8080/api/musician/get')
  }
}
