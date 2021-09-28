import { Component, OnInit } from '@angular/core';
import { Operacao } from 'src/app/models/Operacao';
import { OperacaoService } from 'src/app/services/operacao.service';
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
export class OperacaoDetalhesComponent implements OnInit {

  operacao: Operacao = {
    corretoraid: 0,
    papelid: 0,
    quantidade: 0,
    tipoOperacaoid: 0,
    usuarioid: 0,
    valorTotal: 0,
    valorUnitario: 0,

    }

  id!:string;
  constructor(private service: OperacaoService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


    ngOnInit(): void {
    this.service.detalhes(this.id).subscribe((operacao) => {
      this.operacao = operacao;
      console.log(operacao.id)
    });
  }

}
