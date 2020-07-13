import { Component } from '@angular/core';
import { IdentityService } from './core/services/identity/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-search';

  constructor(private identityService: IdentityService) {

  }

  ngOnInit(): void {
    // this.identityService.initAuth();
  }
}
