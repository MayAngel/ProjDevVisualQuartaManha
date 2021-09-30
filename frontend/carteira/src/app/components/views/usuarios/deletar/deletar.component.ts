import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class UsuarioDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: UsuarioService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(pais);
      //this.usuario = usuario;
      this.snack.open("Usuario excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",

      });
      this.rout.navigate([""]);
  }

}
