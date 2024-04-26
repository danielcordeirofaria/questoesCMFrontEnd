import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicos/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  isTokenValid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Verifica se o usuário é admin ao inicializar o componente
    this.checkAdminStatus();
    this.verificarToken();
  }

  public carregarQuestao(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/questoesAleatorias'])
    );
  }

  checkAdminStatus() {
    const token = localStorage.getItem('token'); // Obtenha o token do localStorage

    // Verifique se há um token
    if (token) {
      // Decodifique o token para obter o conteúdo
      const tokenContent = JSON.parse(atob(token.split('.')[1]));

      // Verifique se o token contém o claim "role" e se o valor é "admin"
      if (tokenContent.role === 'admin') {
        this.isAdmin = true; // Defina isAdmin como true se o usuário for admin
      }
    }
  }

  verificarToken(): void {
    const token = localStorage.getItem('token');
    this.isTokenValid = !!token && token !== 'invalido'; // Defina isTokenValid como true se houver um token válido, caso contrário, defina como false
  }
  

  deslogar() {
    localStorage.removeItem('token'); // Remova o token do localStorage
    this.isTokenValid = false; // Defina isTokenValid como false para voltar o botão "Entrar"
    this.router.navigateByUrl('/'); // Redirecione para a página inicial  
    location.reload(); // Recarregue a página

}




}
