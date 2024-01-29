import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AdicionarQuestaoComponent } from './componentes/adicionar-questao/adicionar-questao.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';

const routes: Routes = [
  {path: '',      component: MainComponent},
  {path: 'adicionarQuestao', component: AdicionarQuestaoComponent},
  {path: 'entrar', component: EntrarComponent}
  
  // {path: 'link2', component: Componente2Component},
  // {path: 'link3', component: Componente3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
