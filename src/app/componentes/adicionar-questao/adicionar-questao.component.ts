import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-questao',
  templateUrl: './adicionar-questao.component.html',
  styleUrl: './adicionar-questao.component.css'
})
export class AdicionarQuestaoComponent {

  public anoProva: String;
  public numeroDaQuestao: String;
  public enunciado: string;
  public enderecoDaImagem: string;
  public respostaA: string;
  public respostaB: string;
  public respostaC: string;
  public respostaD: string;
  public respostaE: string;
  public gabarito: string;
  public materia: string;
  public enderecoDoVideo: string;
  

  public constructor(){
    this.anoProva = '';
    this.numeroDaQuestao = '';
    this.enunciado = '';
    this.enderecoDaImagem = '';
    this.respostaA = '';
    this.respostaB = '';
    this.respostaC = '';
    this.respostaD = '';
    this.respostaE = '';
    this.gabarito = '';
    this.materia = '';
    this.enderecoDoVideo = '';
  }

  public enviarDados(){
    console.log(this.anoProva)
  }

}

