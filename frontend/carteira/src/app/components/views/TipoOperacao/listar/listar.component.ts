import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoOperacao } from 'src/app/models/TipoOperacao';
import { TipoOperacaoService } from 'src/app/services/tipoOperacao.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class TipoOperacaoListarComponent implements OnInit {

  tipoOperacao !: MatTableDataSource<TipoOperacao>;
  displayedColumns: string[] = ['id', 'nome', 'detalhes','editar','excluir'];

  constructor(private service: TipoOperacaoService, private router: Router, private snack: MatSnackBar) { }
  nome!: string;

  ngOnInit(): void {

    this.service.list().subscribe((tipoOperacao) => {
      this.tipoOperacao = new MatTableDataSource<TipoOperacao>(tipoOperacao);
    });

  }

}
