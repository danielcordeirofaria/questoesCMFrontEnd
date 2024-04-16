import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-questao-unica',
  templateUrl: './questao-unica.component.html',
  styleUrl: './questao-unica.component.css'
})
export class QuestaoUnicaComponent {

  ano: string = '';
  @ViewChild('ano') anoInput!: NgModel; // Referência ao input

  onBlur(): void {
    if (this.anoInput.invalid) {
      this.anoInput.control?.setErrors({ 'incorrect': true }); // Define o erro manualmente
    }
  }

  mostrarCampo(): void {
    const opcaoSelecionada = (document.getElementById("opcoes") as HTMLSelectElement).value;
    const campoAnoNumero = document.getElementById("campoAnoNumero");

    if (campoAnoNumero) { // Verifica se campoAnoNumero não é null
      if (opcaoSelecionada === "opcao1") {
        campoAnoNumero.style.display = "block";
      } else {
        campoAnoNumero.style.display = "none";
      }
    }
  }

  limparCampos(): void {
    // Limpa os campos de entrada
    (document.getElementById("ano") as HTMLInputElement).value = "";
    (document.getElementById("numero") as HTMLInputElement).value = "";
  }

  tratarDados() {
    // Obter os valores dos campos de entrada
    var escolaInput = document.getElementById("escolas") as HTMLSelectElement;
    var anoInput = document.getElementById("ano") as HTMLInputElement;
    var numeroInput = document.getElementById("numero") as HTMLInputElement;

    var escola = escolaInput.value;
    var ano = anoInput.value;
    var numero = numeroInput.value;

    // Realizar o tratamento dos dados
    // Por exemplo, você pode validar se os campos estão preenchidos
    if (escola === "" || ano === "" || numero === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode realizar outras operações com os dados
    console.log("Escola: " + escola);
    console.log("Ano: " + ano);
    console.log("Número: " + numero);
}




}



