import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componentes/main/main.component';
import { AdicionarQuestaoComponent } from './componentes/adicionar-questao/adicionar-questao.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastrarUsuarioComponent } from './componentes/cadastrar-usuario/cadastrar-usuario.component';
import { QuestoesAleatoriasComponent } from './componentes/questoes-aleatorias/questoes-aleatorias.component';
import { AuthGuard } from './guards/auth.guard';
import { QuestaoUnicaComponent } from './componentes/questao-unica/questao-unica.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'adicionarQuestao', component: AdicionarQuestaoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'cadastrarUsuario', component: CadastrarUsuarioComponent},
  {path: 'questoesAleatorias', component: QuestoesAleatoriasComponent, canActivate: [AuthGuard]},
  {path: 'buscarQuestao', component: QuestaoUnicaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
