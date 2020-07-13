import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../../../core/services/identity/identity.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private identiyService : IdentityService) { }

  ngOnInit(): void {
    this.identiyService.completeAuthentication();
  }

}
