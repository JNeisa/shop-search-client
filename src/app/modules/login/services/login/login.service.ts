import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from '../../models/login-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "https://localhost:44310/api/Account";

  constructor(private httpClient: HttpClient) { }

  loginUser(loginDto: LoginDTO) : Observable<any>{
    return this.httpClient.post(this.loginUrl, loginDto);
  }
}
