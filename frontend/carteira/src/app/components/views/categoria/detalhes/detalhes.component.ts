import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router, ActivatedRoute, ParamMap  } from "@angular/router";
import { Observable } from 'rxjs';
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class CategoriaDetalhesComponent implements OnInit {

  categoria: Categoria ={
    nome: "",
    sigla:"",
    }

  id!:string;
  constructor(private service: CategoriaService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


    ngOnInit(): void {
    this.service.detalhes(this.id).subscribe((categoria) => {
      this.categoria = categoria;
      console.log(categoria.nome)
    });
  }

}
