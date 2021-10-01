import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Operacao } from 'src/app/models/Operacao';
import { OperacaoService } from 'src/app/services/operacao.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class OperacaoEditarComponent implements OnInit {

  // id!: number;
  // usuarioid!: number;
  // corretoraid!: number;
  // papelid!: number;
  // tipooperacaoid!: number;
  // valorUnitario!: number;
  // quantidade!: number;
  // valorTotal!: number;

  constructor() { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    //   if(this.id != undefined){
    //     this.service.getOperacao(this.id).subscribe((operacao) => {
    //       this.usuarioid = operacao.usuarioid;
    //       this.corretoraid = operacao.corretoraid;
    //       this.papelid = operacao.papelid;
    //       this.tipooperacaoid = operacao.tipooperacaoid;
    //       this.valorUnitario = operacao.valorUnitario;
    //       this.quantidade = operacao.quantidade;
    //       this.valorTotal = operacao.valorTotal;
    //     });
    //   }
    // });
  }

  // editar(): void{
  //   let operacao: Operacao = {
  //     usuarioid: this.usuarioid,
  //     corretoraid: this.corretoraid,
  //     papelid: this.papelid,
  //     tipooperacaoid: this.tipooperacaoid,
  //     valorUnitario: this.valorUnitario,
  //     quantidade: this.quantidade,
  //     valorTotal: this.valorTotal
  //   }

  //   this.service.update(operacao).subscribe((operacao) => {
  //     this.snack.open("Operação editada com sucesso!", "", {
  //       duration: 3000,
  //       horizontalPosition: "center",
  //       verticalPosition: "bottom"
  //     });
  //     this.router.navigate(["operacao/listar"]);
  //   });
  // }

}
