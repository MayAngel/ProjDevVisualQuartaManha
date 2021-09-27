import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  usuarios !: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf'];

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {

    this.service.list().subscribe((usuarios) => {
      this.usuarios = new MatTableDataSource<Usuario>(usuarios);
    });

  }

}
