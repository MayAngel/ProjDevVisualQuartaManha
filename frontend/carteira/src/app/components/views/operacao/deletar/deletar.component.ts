import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operacao } from 'src/app/models/Operacao';
import { OperacaoService } from 'src/app/services/operacao.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class OperacaoDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: OperacaoService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(pais);
      //this.operacao = operacao;
      this.snack.open("Operacao excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate([""]);
  }

}
