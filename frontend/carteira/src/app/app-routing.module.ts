import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './components/views/usuarios/listar/listar.component';


const routes: Routes = [ 
  {
    path:'',
    component: CadastrarUsuarioComponent
  },
  {
    path:'usuario/listar',
    component:ListarUsuarioComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
