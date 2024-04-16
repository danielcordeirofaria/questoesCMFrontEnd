import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestoesToken } from '../Model/QuestoesToken';
import { environment } from '../../environments/environment.development';
import { Login } from '../Model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public efetuarLogin(login: Login): Observable<QuestoesToken>{
    
    return this.http.post<QuestoesToken>(environment.apiURL + "/auth/login", login);

  }
}
