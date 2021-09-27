import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


import { CadastrarUsuarioComponent } from './components/views/usuarios/cadastrar/cadastrar.component';
import { ListarUsuarioComponent } from './components/views/usuarios/listar/listar.component';
// import { HeaderComponent } from './components/template/header/header.component';
// import { ContentComponent } from './components/template/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    HeaderComponent,
    ContentComponent,
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
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
