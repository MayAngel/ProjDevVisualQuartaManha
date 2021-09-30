import { Component, OnInit, ValueProvider } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Papel } from 'src/app/models/Papel';
import { PapelService } from 'src/app/services/papel.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class PapelEditarComponent implements OnInit {

  id!: number;
  nome!: string;
  sigla!: string;

  constructor(private service: PapelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params.id;
      if(this.id != undefined){
        this.service.getPapel(this.id).subscribe((papel) => {
          this.nome = papel.nome;
          this.sigla =papel.sigla;
        });
      }
    });
  }

  editar(): void{
    let papel: Papel = {
      nome: this.nome,
      sigla: this.sigla
    }

    this.service.update(papel).subscribe((papel) => {
      this.router.navigate(["papel/listar"]);
    })
  }

}
