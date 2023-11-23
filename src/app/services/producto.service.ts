import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/modelo';

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

  delProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }

  crearProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }
}
