import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILogin } from "./models/login.interface";

@Injectable()

export class AccountService {
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
}
