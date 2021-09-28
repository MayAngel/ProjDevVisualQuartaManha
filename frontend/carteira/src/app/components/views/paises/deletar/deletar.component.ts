import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/models/Pais';
import { PaisService } from 'src/app/services/pais.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class PaisDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: PaisService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(pais);
      //this.pais = pais;
      this.snack.open("Pais excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate(["pais/listar"]);
  }

}
