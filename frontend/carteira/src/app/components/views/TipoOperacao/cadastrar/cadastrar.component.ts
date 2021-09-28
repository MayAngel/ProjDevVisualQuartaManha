import { TipoOperacaoService } from './../../../../services/tipoOperacao.service';
import { TipoOperacao } from './../../../../models/TipoOperacao';
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
export class TipoOperacaoCadastrarComponent implements OnInit {

  nome!: string;
  sigla!: string;

  constructor(private service: TipoOperacaoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  cadastrar() {

    let tipoOperacao: TipoOperacao ={
      nome: this.nome,
      sigla:this.sigla,
    }

    console.log(tipoOperacao);


    this.service.create(tipoOperacao) .subscribe((tipoOperacao) => {
      console.log(tipoOperacao);
      this.snack.open("Tipo Operacao cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["tipooperacao/listar"]);
    });
  }

}
