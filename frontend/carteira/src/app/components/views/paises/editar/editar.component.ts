import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/Pais';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class PaisEditarComponent implements OnInit {

  id!: number;
  nome!: string;

  constructor(private service: PaisService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      if(this.id != undefined){
        this.service.getPais(this.id).subscribe((pais) => {
          this.nome = pais.nome;
        })
      }
    });
  }

  editar(): void{
    let pais: Pais = {
      nome: this.nome
    }

    this.service.update(pais).subscribe((pais) => {
      this.snack.open("País editado com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      })
      this.router.navigate(["paises/listar"]);
    })
  }

}
