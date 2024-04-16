import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Questao } from '../Model/Questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(private http: HttpClient) { }

  public getQuestao(): Observable<Questao>{
    return this.http.get<Questao>("http://localhost:8080/questoes/aleatoria").pipe(
      map(data => this.montarQuestao(data))
    );
  }

  private montarQuestao(data: any): Questao {
    // Aqui você pode implementar a lógica para montar a questão com os dados recebidos
    // Por exemplo:

    const questao: Questao = {
      idQuestao: data.idQuestao,
      codigoQuestao: data.codigoQuestao,
      escolaDaProva: data.escolaDaProva,
      anoProva:  data.anoProva,
      numeroQuestao: data.numeroQuestao,
      enunciado: data.enunciado,
      respostaA: data.respostaA,
      respostaB: data.respostaB,
      respostaC:  data.respostaC,
      respostaD: data.respostaD,
      respostaE: data.respostaE,
      gabarito: data.gabarito,
      materia: data.materia,
      enderecoVideo: data.enderecoVideo
    };
    console.log(data.enunciado)

    return questao;
  }
}
