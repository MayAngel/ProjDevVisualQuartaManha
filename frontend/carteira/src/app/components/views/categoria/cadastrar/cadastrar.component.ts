import { CategoriaService } from './../../../../services/categoria.service';
import { Categoria } from './../../../../models/Categoria';
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
export class CategoriaCadastrarComponent implements OnInit {
  nome!: string;
  sigla!: string;

  constructor(private service: CategoriaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar() {

    let categoria: Categoria ={
      nome: this.nome,
      sigla:this.sigla,
    }

    console.log(categoria);


    this.service.create(categoria) .subscribe((categoria) => {
      console.log(categoria);
      this.snack.open("Categoria cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["categoria/listar"]);
    });
  }

}
