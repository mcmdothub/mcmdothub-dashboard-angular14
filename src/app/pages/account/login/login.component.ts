import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ILogin } from '../models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //loginInput: { email: string, password: string } = { email: '', password: '' }
  // using the interface now
  // and check if there is allready in the localstorage an username saved
  loginInput: ILogin = {
    userName: localStorage.getItem('username') || '',
    password: '',
    rememberMe: localStorage.getItem('rememberMe') === 'true'
  }

  // Object
  apiResponse: any = {};

  sending: boolean = false;

  constructor(
    private _accountContext: AccountService
  ) { }

  ngOnInit(): void {
  }

  postLoginForm() {
    // after fylling username & password & press ENTER
    this.sending = true;

    this._accountContext.login(this.loginInput)
    .subscribe(apiResponse => {
      console.warn(apiResponse);
      this.apiResponse = apiResponse;
      this.sending = false;

      if(this.loginInput.userName) {
        // Store username to browser storage
        localStorage.setItem('username', this.loginInput.userName);
      } else {
        localStorage.removeItem('username');
      }

      if(this.loginInput.rememberMe) {
        // Store rememberMe to browser storage
        localStorage.setItem('rememberMe', `${this.loginInput.rememberMe}`)
      } else {
        localStorage.removeItem('rememberMe');
      }
    })
  }

}
