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
export class CadastrarUsuarioComponent implements OnInit {

  email!: string;
  senha!: string;
  nome!: string;
  cpf!: number;

  constructor(private service: UsuarioService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar(): void {
    //console.log(usuario);
    let usuario = new Usuario();

    usuario.nome = this.nome;
    usuario.email = this.email;
    usuario.senha = this.senha;
    usuario.cpf = this.cpf;

    this.service.create(usuario).subscribe((usuario) =>{
      console.log(usuario);
      this.snack.open("Usuario cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["usuario/listar"]);
    });
  }

}
