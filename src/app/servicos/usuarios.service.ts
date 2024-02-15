import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public cadastrarNovoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(environment.apiURL + "/usuarios", usuario);
  }
}
