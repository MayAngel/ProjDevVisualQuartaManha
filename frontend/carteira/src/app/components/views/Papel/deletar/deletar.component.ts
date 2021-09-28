import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Papel } from 'src/app/models/Papel';
import { PapelService } from 'src/app/services/papel.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class PapelDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: PapelService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(papel);
      //this.papel = papel;
      this.snack.open("Papel excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate(["papel/listar"]);
  }

}
