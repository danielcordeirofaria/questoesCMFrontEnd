import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicos/login.service';
import { QuestoesToken } from '../../Model/QuestoesToken';
import { Login } from '../../Model/Login';
import { TokenService } from '../../servicos/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  public login: Login = new Login();
  
  public loading: boolean = false;
  public mensagem: String = "";
  public constructor(private router:Router, private service: LoginService, private tokenService: TokenService){}

  logar() {
    this.loading = true;
    this.service.efetuarLogin(this.login).subscribe(
      (res: QuestoesToken)  => {
        this.loading = false;
        this.tokenService.saveToken(res.token);
        console.log(res.token)
        this.router.navigate(["main"])
      },
      (err: any) => {
        this.mensagem = "Usuário/Senha inválidos";
        this.loading = false;
      }
    )

    console.log(this.login)
    }

}
