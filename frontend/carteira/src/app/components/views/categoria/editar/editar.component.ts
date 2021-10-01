import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class CategoriaEditarComponent implements OnInit {

  id!: number;
  nome!: string;
  sigla!: string;

  constructor(private service: CategoriaService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      if(this.id != undefined) {
        this.service.getCategoria(this.id).subscribe((categoria) => {
          this.nome = categoria.nome;
          this.sigla = categoria.sigla;
        });
      }
    });
  }

  editar(): void {
    let categoria: Categoria = {
      nome: this.nome,
      sigla: this.sigla
    }

    this.service.update(categoria).subscribe((categoria) => {
      this.snack.open("Categoria Editada com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["categoria/listar"]);
    });
  }

}
