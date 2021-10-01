import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { TipoOperacaoService } from './../../../../services/tipoOperacao.service';
import { PapelService } from './../../../../services/papel.service';
import { CorretoraService } from './../../../../services/corretora.service';
import { TipoOperacao } from './../../../../models/TipoOperacao';
import { Papel } from './../../../../models/Papel';
import { Corretora } from './../../../../models/Corretora';
import { OperacaoService } from './../../../../services/operacao.service';
import { Operacao } from './../../../../models/Operacao';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-carteira',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class CarteiraDetalhesComponent implements OnInit {


  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie'
    },
    title: {
      text: 'Resumo da Carteira'
    },
    tooltip: {
      pointFormat: '{series.name}: {point.percentage:.1f}%'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f} %'
        }
      }
    },
    // series: [{
    //   name: 'Percentual',
    //   colorByPoint: true,
    //   data: []
    // }]
  }

  corretoraid!: number;
  papelid!: number;
  quantidade!: number;
  tipooperacaoid!: number;
  usuarioid!: number;
  valorTotal!: number;
  valorUnitario!: number;

  corretoras: Corretora[] = [];
  papeis: Papel[] = [];
  tiposOperacoes: TipoOperacao[] = [];
  usuarios: Usuario[] = [];
  operacoes: Operacao[] = [];

  dados = new Array();

  myControl: FormControl = new FormControl();
  filteredOptionsCorretora: Observable<Corretora[]>;
  filteredOptionsPapeis: Observable<Papel[]>;
  filteredOptionsTipoOperacao: Observable<TipoOperacao[]>;
  filteredOptionsUsuario: Observable<Usuario[]>;
  filteredOptionsOperacao: Observable<Operacao[]>;

  id!: string;
  constructor(
    private serviceOperacao: OperacaoService,
    private serviceUsuario: UsuarioService,
    private serviceCorretora: CorretoraService,
    private serviceTipoOperacao: TipoOperacaoService,
    private servicePapel: PapelService,
    private service: OperacaoService,
    private router: Router,
    private snack: MatSnackBar,
    private route: ActivatedRoute,) {

    this.route.params.subscribe(params => this.id = params['id']);

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

    this.filteredOptionsUsuario = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsuario(value))
    );
    this.filteredOptionsOperacao = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOperacao(value))
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


    this.filteredOptionsUsuario = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterUsuario(value))
    );

    this.serviceUsuario.list().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });

    this.filteredOptionsOperacao = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOperacao(value))
    );

    this.serviceOperacao.listOperacoesUsuario(this.id).subscribe((operacoes) => {
      this.operacoes = operacoes;

      this.options.series = new Array();

      this.options.series[0] = new Object();
      this.options.series[0].name = "Papeis";
      for (let index = 0; index < this.operacoes.length; index++) {
        this.dados[index] = new Array(this.operacoes[index].corretoraid, this.operacoes[index].valorUnitario * this.operacoes[index].quantidade);
      }
      this.options.series[0].data = this.dados;


      console.log(this.dados);
      Highcharts.chart('container', this.options);
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

  private _filterUsuario(value: string): Usuario[] {
    const filterValue = value.toLowerCase();
    return this.usuarios.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  private _filterOperacao(value: string): Operacao[] {
    const filterValue = value.toLowerCase();
    return this.operacoes.filter(option => option.CreateDate?.toLowerCase().includes(filterValue));
  }

}
