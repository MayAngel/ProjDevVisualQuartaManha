import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Operacao } from 'src/app/models/Operacao';
import { OperacaoService } from 'src/app/services/operacao.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class OperacaoListarComponent implements OnInit {

  operacao !: MatTableDataSource<Operacao>;
  displayedColumns: string[] = ['id', 'valorTotal', 'valorUnitario', 'corretoraid', 'papelid', 'quantidade', 'tipooperacaoid', 'usuarioid', 'detalhes', 'carteira', 'editar', 'excluir'];


  constructor(private service: OperacaoService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.service.list().subscribe((operacao) => {
      this.operacao = new MatTableDataSource<Operacao>(operacao);
    });

  }

}
