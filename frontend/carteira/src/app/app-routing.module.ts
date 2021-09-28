import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioCadastrarComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { UsuarioListarComponent } from './components/views/usuarios/listar/listar.component';
import { UsuarioDeletarComponent } from './components/views/usuarios/deletar/deletar.component';
import { UsuarioDetalhesComponent } from './components/views/usuarios/detalhes/detalhes.component';
import { UsuarioEditarComponent } from './components/views/usuarios/editar/editar.component';


import { PaisCadastrarComponent } from './components/views/paises/cadastrar/cadastrar.component';
import { PaisListarComponent } from './components/views/paises/listar/listar.component';
import { PaisDeletarComponent } from './components/views/paises/deletar/deletar.component';
import { PaisDetalhesComponent } from './components/views/paises/detalhes/detalhes.component';
import { PaisEditarComponent } from './components/views/paises/editar/editar.component';



import { CarteiraDetalhesComponent } from './components/views/carteira/detalhes/detalhes.component';
import { OperacaoDetalhesComponent } from './components/views/operacao/detalhes/detalhes.component';
import { OperacaoCadastrarComponent } from './components/views/operacao/cadastrar/cadastrar.component';
import { OperacaoListarComponent } from './components/views/operacao/listar/listar.component';
import { OperacaoDeletarComponent } from './components/views/operacao/deletar/deletar.component';
import { OperacaoEditarComponent } from './components/views/operacao/editar/editar.component';
import { CorretoraCadastrarComponent } from './components/views/corretora/cadastrar/cadastrar.component';
import { CorretoraListarComponent } from './components/views/corretora/listar/listar.component';
import { CorretoraDeletarComponent } from './components/views/corretora/deletar/deletar.component';
import { CorretoraDetalhesComponent } from './components/views/corretora/detalhes/detalhes.component';
import { CorretoraEditarComponent } from './components/views/corretora/editar/editar.component';
import { CategoriaCadastrarComponent } from './components/views/categoria/cadastrar/cadastrar.component';
import { CategoriaListarComponent } from './components/views/categoria/listar/listar.component';
import { CategoriaDeletarComponent } from './components/views/categoria/deletar/deletar.component';
import { CategoriaDetalhesComponent } from './components/views/categoria/detalhes/detalhes.component';
import { CategoriaEditarComponent } from './components/views/categoria/editar/editar.component';
import { TipoOperacaoCadastrarComponent } from './components/views/TipoOperacao/cadastrar/cadastrar.component';
import { TipoOperacaoListarComponent } from './components/views/TipoOperacao/listar/listar.component';
import { TipoOperacaoDeletarComponent } from './components/views/TipoOperacao/deletar/deletar.component';
import { TipoOperacaoDetalhesComponent } from './components/views/TipoOperacao/detalhes/detalhes.component';
import { TipoOperacaoEditarComponent } from './components/views/TipoOperacao/editar/editar.component';
import { PapelCadastrarComponent } from './components/views/Papel/cadastrar/cadastrar.component';
import { PapelListarComponent } from './components/views/Papel/listar/listar.component';
import { PapelDeletarComponent } from './components/views/Papel/deletar/deletar.component';
import { PapelDetalhesComponent } from './components/views/Papel/detalhes/detalhes.component';
import { PapelEditarComponent } from './components/views/Papel/editar/editar.component';


const routes: Routes = [
  {
    path:'',
    component: UsuarioListarComponent
  },
  {
    path:'usuarios/listar',
    component: UsuarioListarComponent
  },
  {
    path:'usuarios/cadastrar',
    component:UsuarioCadastrarComponent
  },
  {
    path:'usuarios/editar/:id',
    component:UsuarioEditarComponent
  },
  {
    path:'usuarios/deletar/:id',
    component:UsuarioDeletarComponent
  },
  {
    path:'usuarios/detalhes/:id',
    component:UsuarioDetalhesComponent
  },
  {
    path:'paises/listar',
    component: PaisListarComponent
  },
  {
    path:'paises/cadastrar',
    component:PaisCadastrarComponent
  },
  {
    path:'paises/editar/:id',
    component:PaisEditarComponent
  },
  {
    path:'paises/deletar/:id',
    component:PaisDeletarComponent
  },
  {
    path:'paises/detalhes/:id',
    component:PaisDetalhesComponent
  },
  {
    path:'categoria/listar',
    component: CategoriaListarComponent
  },
  {
    path:'categoria/cadastrar',
    component:CategoriaCadastrarComponent
  },
  {
    path:'categoria/editar/:id',
    component:CategoriaEditarComponent
  },
  {
    path:'categoria/deletar/:id',
    component:CategoriaDeletarComponent
  },
  {
    path:'categoria/detalhes/:id',
    component:CategoriaDetalhesComponent
  },
  {
    path:'corretora/listar',
    component: CorretoraListarComponent
  },
  {
    path:'corretora/cadastrar',
    component:CorretoraCadastrarComponent
  },
  {
    path:'corretora/editar/:id',
    component:CorretoraEditarComponent
  },
  {
    path:'corretora/deletar/:id',
    component:CorretoraDeletarComponent
  },
  {
    path:'corretora/detalhes/:id',
    component:CorretoraDetalhesComponent
  },
  {
    path:'operacao/listar',
    component: OperacaoListarComponent
  },
  {
    path:'operacao/cadastrar',
    component:OperacaoCadastrarComponent
  },
  {
    path:'operacao/editar/:id',
    component:OperacaoEditarComponent
  },
  {
    path:'operacao/deletar/:id',
    component:OperacaoDeletarComponent
  },
  {
    path:'operacao/detalhes/:id',
    component:OperacaoDetalhesComponent
  },
  {
    path:'papel/listar',
    component: PapelListarComponent
  },
  {
    path:'papel/cadastrar',
    component:PapelCadastrarComponent
  },
  {
    path:'papel/editar/:id',
    component:PapelEditarComponent
  },
  {
    path:'papel/deletar/:id',
    component:PapelDeletarComponent
  },
  {
    path:'papel/detalhes/:id',
    component:PapelDetalhesComponent
  },
  {
    path:'tipooperacao/listar',
    component: TipoOperacaoListarComponent
  },
  {
    path:'tipooperacao/cadastrar',
    component:TipoOperacaoCadastrarComponent
  },
  {
    path:'tipooperacao/editar/:id',
    component:TipoOperacaoEditarComponent
  },
  {
    path:'tipooperacao/deletar/:id',
    component:TipoOperacaoDeletarComponent
  },
  {
    path:'tipooperacao/detalhes/:id',
    component:TipoOperacaoDetalhesComponent
  },
  {
    path:'carteira/detalhes/:id',
    component:CarteiraDetalhesComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
