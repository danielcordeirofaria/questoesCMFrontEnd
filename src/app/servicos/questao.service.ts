import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questao } from '../Model/Questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(private http: HttpClient) { }

  public getQuestao(): Observable<Questao>{
    return this.http.get<Questao>("http://localhost:8080/questoes/aleatoria");
  }

}
