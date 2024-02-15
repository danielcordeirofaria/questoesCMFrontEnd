import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AdicionarQuestaoComponent } from './componentes/adicionar-questao/adicionar-questao.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarUsuarioComponent } from './componentes/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {path: '',      component: MainComponent},
  {path: 'adicionarQuestao', component: AdicionarQuestaoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'cadastrarUsuario', component: CadastrarUsuarioComponent}
  
  // {path: 'link2', component: Componente2Component},
  // {path: 'link3', component: Componente3Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
