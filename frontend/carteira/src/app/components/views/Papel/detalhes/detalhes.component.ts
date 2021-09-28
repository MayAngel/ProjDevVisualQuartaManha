import { Component, OnInit } from '@angular/core';
import { Papel } from 'src/app/models/Papel';
import { PapelService } from 'src/app/services/papel.service';
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
export class PapelDetalhesComponent implements OnInit {

  papel: Papel ={
    nome: "",
    sigla:"",
    }

  id!:string;
  constructor(private service: PapelService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


    ngOnInit(): void {
    this.service.detalhes(this.id).subscribe((papel) => {
      this.papel = papel;
      console.log(papel.nome)
    });
  }

}
