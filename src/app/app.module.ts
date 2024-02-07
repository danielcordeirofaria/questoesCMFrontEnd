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

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AdicionarQuestaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
