import { PaisService } from './../../../../services/pais.service';
import { Pais } from './../../../../models/Pais';
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
export class PaisCadastrarComponent implements OnInit {

  email!: string;
  senha!: string;
  nome!: string;
  cpf!: string;

  constructor(private service: PaisService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar() {

    let pais: Pais ={
    nome : this.nome,
    }

    console.log(pais);


    this.service.create(pais) .subscribe((pais) => {
      console.log(pais);
      this.snack.open("Pais cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["paises/listar"]);
    });
  }

}
