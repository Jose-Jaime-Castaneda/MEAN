import { Routes } from '@angular/router';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

export const routes: Routes = [
    { path: '', component: ListarProductoComponent },
    { path: 'crear_producto', component: CrearProductoComponent },
    { path: 'editar_producto/:id', component: CrearProductoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
