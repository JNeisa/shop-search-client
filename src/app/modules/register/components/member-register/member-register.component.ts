import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegisterDTO } from '../../models/user-register-dto';
import { UserRegisterService } from '../../services/user-register/user-register.service';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.scss']
})
export class MemberRegisterComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    phone: ['', Validators.required]
  });

  userRegisterModel : UserRegisterDTO;

  constructor(private fb: FormBuilder,
    private userRegisterService: UserRegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userRegisterModel ={
      firstName : this.registerForm.controls.firstName.value,
      lastName : this.registerForm.controls.lastName.value,
      email : this.registerForm.controls.email.value,
      password : this.registerForm.controls.password.value,
      phone : this.registerForm.controls.phone.value,
    }

    // this.userRegisterService.getData().subscribe();
    this.userRegisterService.registerUser(this.userRegisterModel).subscribe();
  }
}
