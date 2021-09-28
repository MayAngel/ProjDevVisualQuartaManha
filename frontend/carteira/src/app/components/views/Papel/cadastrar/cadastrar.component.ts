import { PapelService } from './../../../../services/papel.service';
import { Papel } from './../../../../models/Papel';
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
export class PapelCadastrarComponent implements OnInit {

  nome!: string;
  sigla!: string;


  constructor(private service: PapelService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar() {

    let papel: Papel ={
      nome: this.nome,
      sigla:this.sigla,
    }

    console.log(papel);


    this.service.create(papel) .subscribe((papel) => {
      console.log(papel);
      this.snack.open("Papel cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["papel/listar"]);
    });
  }

}
