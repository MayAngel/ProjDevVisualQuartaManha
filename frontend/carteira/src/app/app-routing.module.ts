import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/categorias/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/categorias/listar/listar.component';

import { CadastrarUsuarioComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './components/views/usuarios/listar/listar.component';


const routes: Routes = [ 
  {
    path:'',
    component: CadastrarUsuarioComponent
  },
  {
    path:'usuarios/listar',
    component:ListarUsuarioComponent
  },
  {
    path:'categoria/cadastrar',
    component:CadastrarComponent
  },
  {
    path:'categoria/listar',
    component:ListarComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
