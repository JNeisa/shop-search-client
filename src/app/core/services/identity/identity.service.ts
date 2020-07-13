import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { getClientSettings } from '../../user-manager-settings';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private manager: UserManager;
  private user: User | null;
  constructor() { }

  initAuth() {
    this.manager = new UserManager(getClientSettings());

    this.manager.getUser().then(user => {
      debugger;
      if(user){
        this.user = user;
      }
      else{
        this.startAuthentication();
      }

    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
}
