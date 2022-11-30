import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ILogin } from "../../pages/account/models/login.interface";

// Because i want this instance AuthService to be only 1
@Injectable({providedIn: 'root'})

export class AuthService {
  constructor(
    private _httpClient: HttpClient
  ) {

  }

  /*
  API Endpoint: https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login
  942001 / B2e@21 - Supervisor
  574040 / B2e@21 - Admin
  */
  login(input: ILogin) {
    return this._httpClient.post('https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login', input);
  }

  // method to fetch login user details
  loadUser() {
    // prepare an http header , the header is an object {}
    const headers = {
      // this object will have an Authorization property Bearer pkus the token stored allready in the browser localstorage
      headers: {
        'Authorization': 'Bearer' + localStorage.getItem('myToken')
      }
    };

    // returns an Observable with Object
    return this._httpClient.get('https://ytc.beginner2expert.com/angular14/api/public/secure/user/basic/details')
    .pipe(map((apiResponse: any) => {
      return apiResponse.data;
    }))
  }
}
