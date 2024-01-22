import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AdicionarQuestaoComponent } from './componentes/adicionar-questao/adicionar-questao.component';


const routes: Routes = [
  {path: '',      component: MainComponent},
  {path: 'adicionarQuestao', component: AdicionarQuestaoComponent}
  // {path: 'link2', component: Componente2Component},
  // {path: 'link3', component: Componente3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
