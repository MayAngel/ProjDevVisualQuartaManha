import { TipoOperacaoService } from './../../../../services/tipoOperacao.service';
import { PapelService } from './../../../../services/papel.service';
import { CorretoraService } from './../../../../services/corretora.service';
import { TipoOperacao } from './../../../../models/TipoOperacao';
import { Papel } from './../../../../models/Papel';
import { Corretora } from './../../../../models/Corretora';
import { OperacaoService } from './../../../../services/operacao.service';
import { Operacao } from './../../../../models/Operacao';
import { MatTableDataSource } from "@angular/material/table";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatCardModule } from '@angular/material/card';
import { FormControl} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class OperacaoCadastrarComponent implements OnInit {



  corretoraid!: number;
  papelid!: number;
  quantidade!: number;
  tipoOperacaoid!: number;
  usuarioid!: number;
  valorTotal!: number;
  valorUnitario!: number;

  corretoras: Corretora[] = [];
  papeis: Papel[] = [];
  tiposOperacoes: TipoOperacao[] = [];

  myControl: FormControl = new FormControl();
  filteredOptionsCorretora: Observable<Corretora[]>;
  filteredOptionsPapeis: Observable<Papel[]>;
  filteredOptionsTipoOperacao: Observable<TipoOperacao[]>;

  constructor(private serviceCorretora: CorretoraService,private serviceTipoOperacao: TipoOperacaoService,private servicePapel: PapelService, private service: OperacaoService, private router: Router, private snack: MatSnackBar) {
    this.filteredOptionsCorretora = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCorretora(value))
    );

     this.filteredOptionsPapeis = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPapel(value))
     );

     this.filteredOptionsTipoOperacao = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipoOperacao(value))
    );
   }

  ngOnInit(): void {
     this.filteredOptionsCorretora = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCorretora(value))
     );

    this.serviceCorretora.list().subscribe((corretoras) => {
      this.corretoras = corretoras;
    });

    this.filteredOptionsPapeis = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterPapel(value))
     );

    this.servicePapel.list().subscribe((papeis) => {
      this.papeis = papeis;
    });

     this.filteredOptionsTipoOperacao = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipoOperacao(value))
     );

    this.serviceTipoOperacao.list().subscribe((TipoOperacao) => {
      this.tiposOperacoes = TipoOperacao;
    });




  }

    private _filterCorretora(value: string): Corretora[] {
    const filterValue = value.toLowerCase();
    return this.corretoras.filter(option => option.nome.toLowerCase().includes(filterValue));
    }

      private _filterPapel(value: string): Papel[] {
    const filterValue = value.toLowerCase();
    return this.papeis.filter(option => option.nome.toLowerCase().includes(filterValue));
      }

  private _filterTipoOperacao(value: string): TipoOperacao[] {
    const filterValue = value.toLowerCase();
    return this.tiposOperacoes.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

   cadastrar() {
    //console.log(operacao);
    let operacao: Operacao = {
    corretoraid: this.corretoraid,
    papelid: this.papelid,
    quantidade: this.quantidade,
    tipoOperacaoid: this.tipoOperacaoid,
    usuarioid: this.usuarioid,
    valorTotal: this.valorTotal,
    valorUnitario: this.valorUnitario,

    }





    this.service.create(operacao) .subscribe((operacao) => {
      console.log(operacao);
      this.snack.open("Operacao cadastrado", "", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
      });
      this.router.navigate(["operacao/listar"]);
    });
  }

}
