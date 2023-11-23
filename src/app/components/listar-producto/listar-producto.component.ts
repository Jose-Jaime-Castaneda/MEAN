import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listar-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent {

  productos: any[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
    console.log(this.productos);
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
