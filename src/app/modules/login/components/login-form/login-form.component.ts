import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginDTO } from '../../models/login-dto';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  loginModel : LoginDTO;

  constructor(private fb: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginModel ={
      email : this.loginForm.controls.email.value,
      password : this.loginForm.controls.password.value,
    }
    this.loginService.loginUser(this.loginModel).subscribe();
  }

}
