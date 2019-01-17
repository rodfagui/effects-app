import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get(`${ this.baseUrl }/users?per_page=10&delay=1`).pipe(map(resp => resp['data']));
  }

  getUserById( id: number ) {
    return this.http.get(`${ this.baseUrl }/users/${ id }`).pipe(map(resp => resp['data']));
  }
}
