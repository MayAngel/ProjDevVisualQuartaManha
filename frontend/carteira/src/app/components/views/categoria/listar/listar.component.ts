import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  categoria !: MatTableDataSource<Categoria>;
  displayedColumns: string[] = ['id', 'nome','sigla', 'detalhes','editar','excluir'];

  constructor(private service: CategoriaService, private router: Router, private snack: MatSnackBar) { }
  nome!: string;

  ngOnInit(): void {

    this.service.list().subscribe((categoria) => {
      this.categoria = new MatTableDataSource<Categoria>(categoria);
    });

  }

}
