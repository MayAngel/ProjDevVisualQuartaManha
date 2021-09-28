import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoOperacao } from 'src/app/models/TipoOperacao';
import { TipoOperacaoService } from 'src/app/services/tipoOperacao.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class TipoOperacaoDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: TipoOperacaoService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(tipoOperacao);
      //this.tipoOperacao = tipoOperacao;
      this.snack.open("Tipo Operacao excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate(["tipooperacao/listar"]);
  }

}
