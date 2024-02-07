import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicos/login.service';
import { Usuario } from '../../Model/Usuario';
import { QuestoesToken } from '../../Model/QuestoesToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  public usuario: Usuario = new Usuario();
  public constructor(private route:Router, private service: LoginService){

  }

  logar() {
    this.service.efetuarLogin(this.usuario).subscribe(
      (res: QuestoesToken)  => {
        alert("Login deu certo");
        this.route.navigate(["main"])
      },
      (err: any) => {
        alert("LOGIN FALHOU!!!");
      }
    )

    console.log(this.usuario)
    }

}
