import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../../models/modelo';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  agregarProdcuto() {
    //console.log(this.productoForm);
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      precio: this.productoForm.get('precio')?.value,
    }
    //console.log(PRODUCTO);
    this.router.navigate(['/']);
  }
}
