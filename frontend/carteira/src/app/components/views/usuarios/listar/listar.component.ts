import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios !: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf','editar','excluir'];

  constructor(private service: UsuarioService, private router: Router, private snack: MatSnackBar) { }
  email!: string;
  senha!: string;
  nome!: string;
  cpf!: string;

  ngOnInit(): void {

    this.service.list().subscribe((usuarios) => {
      this.usuarios = new MatTableDataSource<Usuario>(usuarios);
    });

  }

}
