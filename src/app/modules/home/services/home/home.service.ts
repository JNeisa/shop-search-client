import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentityService } from '../../../../core/services/identity/identity.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,
    private identitySerives: IdentityService) { }

  getClaims(): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': this.identitySerives.getAuthorizationHeaderValue() });
    return this.http.get("https:localhost:44349/identity", { headers: headers });
  }
}
