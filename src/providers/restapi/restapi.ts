import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


/*
  Generated class for the RestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiProvider {
  private baseUrl: string = "http://localhost:3000/api/v1";


  constructor(public http: Http) {
  }

  loadPackages() {
    return this.http.get(`${this.baseUrl}/packages`)
      .map(res => res.json());
  }

  loginUser(userParams) {
    return this.http.post(`${this.baseUrl}/user_tokens`, userParams)
      .map(res => res.json());
  }

}
