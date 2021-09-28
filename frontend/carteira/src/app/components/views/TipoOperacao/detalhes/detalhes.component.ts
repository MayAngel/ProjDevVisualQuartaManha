import { Component, OnInit } from '@angular/core';
import { TipoOperacao } from 'src/app/models/TipoOperacao';
import { TipoOperacaoService } from 'src/app/services/tipoOperacao.service';
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
export class TipoOperacaoDetalhesComponent implements OnInit {

  tipoOperacao: TipoOperacao ={
    nome: "",
    sigla:"",
    }

  id!:string;
  constructor(private service: TipoOperacaoService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


    ngOnInit(): void {
    this.service.detalhes(this.id).subscribe((tipoOperacao) => {
      this.tipoOperacao = tipoOperacao;
      console.log(tipoOperacao.nome)
    });
  }

}
