import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Corretora } from 'src/app/models/Corretora';
import { CorretoraService } from 'src/app/services/corretora.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class CorretoraDeletarComponent implements OnInit {


  id!:string;
  constructor(private service: CorretoraService,private rout: Router,private route: ActivatedRoute, private snack: MatSnackBar) {
    this.route.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit(): void {

    this.service.delete(this.id);
      //console.log(pais);
      //this.corretora = corretora;
      this.snack.open("Corretora excluido com sucesso!", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",

      });
      this.rout.navigate(["corretora/listar"]);
  }

}
