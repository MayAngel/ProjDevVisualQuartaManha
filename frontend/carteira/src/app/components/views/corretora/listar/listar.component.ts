import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Corretora } from 'src/app/models/Corretora';
import { CorretoraService } from 'src/app/services/corretora.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class CorretoraListarComponent implements OnInit {

  corretora !: MatTableDataSource<Corretora>;
  displayedColumns: string[] = ['id', 'nome', 'paisId','detalhes','editar','excluir'];


  constructor(private service: CorretoraService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.service.list().subscribe((corretora) => {
      this.corretora = new MatTableDataSource<Corretora>(corretora);
    });

  }

}
