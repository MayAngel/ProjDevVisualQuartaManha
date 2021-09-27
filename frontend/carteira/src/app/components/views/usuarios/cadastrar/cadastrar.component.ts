import { UsuarioService } from './../../../../services/usuario.service';
import { Usuario } from './../../../../models/Usuario';
//import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";


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
    let usuario : Usuario = {
    email = this.email;
    senha = this.senha;
    nome = this.nome;
    cpf = this.cpf;
    };

    this.service.create(usuario).subscribe((usuario) =>{
      console.log(usuario);
      // this.snack.open("Usuario cadastrado", "", {
      //   duration: 3000,
      //   horizontalPosition: "right",
      //   verticalPosition: "top",
      // });
      this.router.navigate(["usuario/listar"]);
    });
  }

}
