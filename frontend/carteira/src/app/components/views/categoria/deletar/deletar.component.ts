import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class CategoriaDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: CategoriaService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(categoria);
      //this.categoria = categoria;
      this.snack.open("Categoria excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate(["categoria/listar"]);
  }

}
