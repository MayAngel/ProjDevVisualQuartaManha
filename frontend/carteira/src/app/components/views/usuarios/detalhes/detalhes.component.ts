import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute, ParamMap  } from "@angular/router";
import { Observable } from 'rxjs';
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class UsuarioDetalhesComponent implements OnInit {

  usuario: Usuario ={
    nome : "",
    email : "",
    senha : "",
    CPF : "",
    }

  id!:string;
  constructor(private service: UsuarioService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


    ngOnInit(): void {
    this.service.detalhes(this.id).subscribe((usuario) => {
      this.usuario = usuario;
      console.log(usuario.nome)
    });
  }

}
