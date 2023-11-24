import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from '../../models/modelo';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  productoForm: FormGroup;
  id: string | null;
  titulo: string = 'CREAR PRODUCTO';

  constructor(private fb: FormBuilder,
    private router: Router,
    private productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.editarProducto();
  }

  agregarProdcuto() {
    //console.log(this.productoForm);
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if (this.id !== null) {
      // EDITAMOS PRODUCTO
      this.productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        //console.log('Producto actualizado', data);
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
      })
    } else {
      // CREAMOS PRODUCTO
      //console.log(PRODUCTO);
      this.productoService.crearProducto(PRODUCTO).subscribe(data => {
        this.router.navigate(['/']);
      }, erros => {
        console.log(erros);
        this.productoForm.reset();
      });
    }
  }

  editarProducto() {
    if (this.id !== null) {
      this.titulo = 'EDITAR PRODUCTO';
      this.productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          precio: data.precio,
        })
      })
    }
  }
}
