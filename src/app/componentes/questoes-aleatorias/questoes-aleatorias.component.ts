import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../../servicos/questao.service';
import { Questao } from '../../Model/Questao';
import { TokenService } from '../../servicos/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questoes-aleatorias',
  templateUrl: './questoes-aleatorias.component.html',
  styleUrl: './questoes-aleatorias.component.css'
})
export class QuestoesAleatoriasComponent implements OnInit {

  public constructor(private router: Router, private service: QuestaoService, private tokenService: TokenService) {

  }

  public ngOnInit(): void {

    this.service.getQuestao().subscribe({
      next: (res: Questao) => {
        console.log("sucesso")
        console.log(res)
      },
      error: (err: any) => {
        console.log("ERROR")
      }
    });
  }

}


