import { Routes } from '@angular/router';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

export const routes: Routes = [
    { path: '', component: ListarProductoComponent, title: 'Lista Productos' },
    { path: 'crear_producto', component: CrearProductoComponent, title: 'Crear Producto' },
    { path: 'editar_producto/:id', component: CrearProductoComponent, title: 'Editar Producto' },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];