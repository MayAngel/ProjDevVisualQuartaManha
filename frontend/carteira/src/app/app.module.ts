import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './components/template/header/header.component';
//import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
//import { ListarComponent } from './components/views/listar/listar.component';
import { ContentComponent } from './components/template/content/content.component';


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


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastrarComponent,
    UsuarioListarComponent,
    HeaderComponent,
    ContentComponent,
    UsuarioDeletarComponent,
    UsuarioDetalhesComponent,
    UsuarioEditarComponent,
    PaisCadastrarComponent,
    PaisListarComponent,
    PaisDeletarComponent,
    PaisDetalhesComponent,
    PaisEditarComponent,
    CarteiraDetalhesComponent,
    OperacaoCadastrarComponent,
    OperacaoListarComponent,
    OperacaoDeletarComponent,
    OperacaoEditarComponent,
    OperacaoDetalhesComponent,
    CorretoraCadastrarComponent,
    CorretoraListarComponent,
    CorretoraDeletarComponent,
    CorretoraDetalhesComponent,
    CorretoraEditarComponent,
    CategoriaCadastrarComponent,
    CategoriaListarComponent,
    CategoriaDeletarComponent,
    CategoriaDetalhesComponent,
    CategoriaEditarComponent,
    TipoOperacaoCadastrarComponent,
    TipoOperacaoListarComponent,
    TipoOperacaoDeletarComponent,
    TipoOperacaoDetalhesComponent,
    TipoOperacaoEditarComponent,
    PapelCadastrarComponent,
    PapelListarComponent,
    PapelDeletarComponent,
    PapelDetalhesComponent,
    PapelEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HighchartsChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
