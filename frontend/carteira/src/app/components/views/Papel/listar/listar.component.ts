import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Papel } from 'src/app/models/Papel';
import { PapelService } from 'src/app/services/papel.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class PapelListarComponent implements OnInit {

  papeis !: MatTableDataSource<Papel>;
  displayedColumns: string[] = ['id', 'nome','sigla', 'detalhes','editar','excluir'];

  constructor(private service: PapelService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.service.list().subscribe((papel) => {
      this.papeis = new MatTableDataSource<Papel>(papel);
    });

  }

}
