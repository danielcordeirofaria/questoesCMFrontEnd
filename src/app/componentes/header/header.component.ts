import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuestaoService } from '../../servicos/questao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
carregarQuestaoAleatoria: any;

  constructor(private router: Router, private service: QuestaoService){
    
  }

  public carregarQuestao(): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/questoesAleatorias'])
    );
  }
  
  

}
