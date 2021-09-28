import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class PaisListarComponent implements OnInit {

  pais !: MatTableDataSource<Pais>;
  displayedColumns: string[] = ['id', 'nome', 'detalhes','corretoras','editar','excluir'];

  constructor(private service: PaisService, private router: Router, private snack: MatSnackBar) { }
  nome!: string;

  ngOnInit(): void {

    this.service.list().subscribe((pais) => {
      this.pais = new MatTableDataSource<Pais>(pais);
    });

  }

}
