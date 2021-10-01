import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoOperacao } from 'src/app/models/TipoOperacao';
import { TipoOperacaoService } from 'src/app/services/tipoOperacao.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class TipoOperacaoEditarComponent implements OnInit {

  id!: number;
  nome!: string;
  sigla!: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: TipoOperacaoService, private snack: MatSnackBar) { 
    route.params.subscribe((params) => {
      this.id = params.id;
      if(this.id != undefined){
        this.service.getTipoOperacao(this.id).subscribe((tipoOperacao) => {
          this.nome = tipoOperacao.nome;
          this.sigla = tipoOperacao.sigla;
        });
      }
    })
  }

  ngOnInit(): void {
  }

  editar(): void{
    let tipoOperacao : TipoOperacao = {
      nome: this.nome,
      sigla: this.sigla
    }

    this.service.update(tipoOperacao).subscribe((tipoOperacao) => {

      this.snack.open("Tipo de operação editado com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top",

      });
      this.router.navigate(["tipooperacao/listar"]);
    })
  }

}
