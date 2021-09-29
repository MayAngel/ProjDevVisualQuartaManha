import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from './../../../../models/Usuario';
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  email!: string;
  senha!: string;
  nome!: string;
  cpf!: string;

  constructor(private service: UsuarioService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar() {
    //console.log(usuario);
    let usuario: Usuario ={
    nome : this.nome,
    email : this.email,
    senha : this.senha,
    CPF : this.cpf,
    }

    console.log(usuario);


   // await this.service.createAsync(usuario);

    this.service.create(usuario) .subscribe((usuario) => {
      console.log(usuario);
      this.snack.open("Usuario cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate([""]);
    });
  }

}
