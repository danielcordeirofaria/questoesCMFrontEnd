import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../../servicos/questao.service';
import { Questao } from '../../Model/Questao';

@Component({
  selector: 'app-questoes-aleatorias',
  templateUrl: './questoes-aleatorias.component.html',
  styleUrls: ['./questoes-aleatorias.component.css']
})
export class QuestoesAleatoriasComponent implements OnInit {
  questao: Questao | null = null;

  constructor(private service: QuestaoService) {}


  ngOnInit(): void {
    this.service.getQuestao().subscribe({
      next: (res: Questao) => {
        console.log("Sucesso ao receber questão:", res);
        this.questao = res; // Atribui a questão recebida à variável questao
      },
      error: (err: any) => {
        console.log("Erro ao receber questão:", err);
      }
    });
  }
}
