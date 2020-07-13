import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegisterDTO } from '../../models/user-register-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private registerUrl = "https://localhost:44310/api/Account";

  constructor(private httpClient: HttpClient) { }

  registerUser(userRegister: UserRegisterDTO) : Observable<any>{
    return this.httpClient.post(this.registerUrl, userRegister);
  }
}
