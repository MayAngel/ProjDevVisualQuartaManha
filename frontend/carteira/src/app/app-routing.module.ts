import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './components/views/usuarios/listar/listar.component';
import { DeletarUsuarioComponent } from './components/views/usuarios/deletar/deletar.component';
//import { ListarUsuarioComponent } from './components/views/usuarios/listar/listar.component';



const routes: Routes = [
  {
    path:'',
    component: ListarUsuarioComponent
  },
  {
    path:'usuarios/cadastrar',
    component:CadastrarUsuarioComponent
  }
  ,
  {
    path:'usuarios/editar',
    component:CadastrarUsuarioComponent
  }
  ,
  {
    path:'usuarios/excluir',
    component:DeletarUsuarioComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
