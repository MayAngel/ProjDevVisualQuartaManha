import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  id!: number;
  email!: string;
  senha!: string;
  nome!: string;
  cpf!: string;

  constructor(private service: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params.id;
      if (this.id != undefined) {
          this.service.getUsuario(this.id).subscribe((usuario) => {
              this.email = usuario.email;
              this.senha = usuario.senha;
              this.nome = usuario.nome;
              this.cpf = usuario.CPF;
          });
      }
    });

  }

  editar(): void{
    let usuario: Usuario = {
      email: this.email,
      senha: this.senha,
      nome: this.nome,
      CPF: this.cpf
    }
    
    this.service.update(usuario).subscribe((usuario) => {
      this.router.navigate([""]);
    })
  }

}
