import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AdicionarQuestaoComponent } from './componentes/adicionar-questao/adicionar-questao.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { WaitIconComponent } from './componentes/wait-icon/wait-icon.component';
import { CadastrarUsuarioComponent } from './componentes/cadastrar-usuario/cadastrar-usuario.component';
import { QuestoesAleatoriasComponent } from './componentes/questoes-aleatorias/questoes-aleatorias.component';
import { AuthGuard } from './guards/auth.guard';
import { InterceptorModule } from './interceptor/interceptor.module';
import { QuestaoUnicaComponent } from './componentes/questao-unica/questao-unica.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AdicionarQuestaoComponent,
    LoginComponent,
    WaitIconComponent,
    CadastrarUsuarioComponent,
    QuestoesAleatoriasComponent,
    QuestaoUnicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
