import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CorretoraService } from 'src/app/services/corretora.service';
import { Corretora } from 'src/app/models/Corretora';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class CorretoraEditarComponent implements OnInit {

  // id!: number;
  // paisId!: string;
  // nome!: string;

  constructor() { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = params.id;
    //   if(this.id != undefined){
    //     this.service.getCorretora(this.id).subscribe((corretora) => {
    //       this.paisId = corretora.paisId;
    //       this.nome = corretora.nome;
    //     });
    //   }
    // });
  }

  // editar(): void{
  //   let corretora: Corretora = {
  //     paisId: this.paisId,
  //     nome: this.nome
  //   }

  //   this.snack.open("Corretora editada com sucesso!", "", {
  //     duration: 3000,
  //     horizontalPosition: "center",
  //     verticalPosition: "bottom"
  //   });
  //   this.router.navigate(["corretora/listar"]);
  // }

}
