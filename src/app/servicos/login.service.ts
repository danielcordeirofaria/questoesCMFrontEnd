import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Usuario } from '../Model/Usuario';
import { Observable } from 'rxjs';
import { QuestoesToken } from '../Model/QuestoesToken';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public efetuarLogin(usuario: Usuario): Observable<QuestoesToken>{

    return this.http.post<QuestoesToken>(environment.apiURL + "/auth/login", usuario);

  }
}
