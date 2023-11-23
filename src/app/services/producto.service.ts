import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string;

  constructor(private http: HttpClient,) {
    this.url = 'http://localhost:4000/api/productos/';
  }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }
}
