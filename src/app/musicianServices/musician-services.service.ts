import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Musician } from '../musician';

@Injectable({
  providedIn: 'root'
})
export class MusicianServicesService {

  constructor(private http: HttpClient) { }

  fetchMusician(): Observable<Musician[]>{
    return this.http.get<Musician[]>('http://localhost:8080/api/musician/get')
  }

  importMusician(): Observable<string>{
    return this.http.get<string>('http://localhost:8080/api/musician/import')
  }
}
