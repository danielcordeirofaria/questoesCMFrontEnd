import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../servicos/usuarios.service';
import { Usuario } from '../../Model/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})

export class CadastrarUsuarioComponent {

  public usuario: Usuario = new Usuario();
  public loading: boolean = false;
  public mensagem: string = "";

  constructor(private route: Router, private service: UsuariosService) { }

  cadastrarUsuario() {
    this.loading = true;
    // Convertendo a data de nascimento para o formato Date
    const dataSplit = this.usuario.dataNascimento.split("/");
    const dia = +dataSplit[0];
    const mes = +dataSplit[1];
    const ano = +dataSplit[2];
    // Adicionando zeros à esquerda caso necessário
    const diaFormatado = dia.toString().padStart(2, '0');
    const mesFormatado = mes.toString().padStart(2, '0');
    this.usuario.dataNascimento = `${ano}-${mesFormatado}-${diaFormatado}`;
    // Chamando o serviço para cadastrar o usuário
    this.service.cadastrarNovoUsuario(this.usuario).subscribe(
      (res: Usuario) => {
        console.log("vim até aqui")

        this.loading = false;
        console.log("Usuário cadastrado:", res); // Adicione este log para verificar se o usuário está sendo retornado corretamente
        // Você pode fazer o que precisar com o usuário retornado, por exemplo:
        this.route.navigate(["main"]);
      },
      (err: any) => {
        this.mensagem = "Usuário não cadastrado";
        this.loading = false;
      }
    );
  }

  formatarDataNascimento(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length === 2 || inputValue.length === 5) {
      event.target.value += '/';
    }
  }
}
