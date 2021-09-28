import { PaisService } from 'src/app/services/pais.service';
import { Pais } from './../../../../models/Pais';
import { PapelService } from './../../../../services/papel.service';
import { CorretoraService } from './../../../../services/corretora.service';
import { Corretora } from './../../../../models/Corretora';

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CorretoraCadastrarComponent implements OnInit {

  nome!: string;
  paisId!: string;


  paises: Pais[] = [];

  myControl: FormControl = new FormControl();
  filteredOptionsPais: Observable<Pais[]>;

  constructor(private servicePais: PaisService, private service: CorretoraService, private router: Router, private snack: MatSnackBar) {
    this.filteredOptionsPais = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPais(value))
    );

  }

  ngOnInit(): void {
    this.filteredOptionsPais = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPais(value))
    );

    this.servicePais.list().subscribe((paises) => {
      this.paises = paises;
    });
  }

  private _filterPais(value: string): Pais[] {
    const filterValue = value.toLowerCase();
    return this.paises.filter(option => option.nome.toLowerCase().includes(filterValue));
  }



  cadastrar() {
    //console.log(corretora);
    let corretora: Corretora = {
      nome: this.nome,
      paisId: this.paisId,
    }

    this.service.create(corretora).subscribe((corretora) => {
      console.log(corretora);
      this.snack.open("Corretora cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["corretora/listar"]);
    });
  }

}
