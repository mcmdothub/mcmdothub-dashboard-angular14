import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/constants';
import { AuthService } from '../../../core/services/auth.service';
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
    userName: localStorage.getItem(AppConstants.usernameKey) || '',
    password: '',
    rememberMe: localStorage.getItem(AppConstants.rememberMeKey) === 'true'
  }

  // Object
  apiResponse: any = {};

  sending: boolean = false;

  constructor(
    private _accountContext: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  postLoginForm() {
    // after fylling username & password & press ENTER
    this.sending = true;

    // if i dont put: apiResponse:any will give an error for apiResponse.id & apiResponse.data => "Property 'data' does not exist on type 'Object'.ts(2339)"
    this._accountContext.login(this.loginInput)
    .subscribe((apiResponse:any) => {
      console.warn(apiResponse);
      this.apiResponse = apiResponse;
      this.sending = false;

      if(this.loginInput.userName) {
        // Store username to browser storage
        localStorage.setItem(AppConstants.usernameKey, this.loginInput.userName);
      } else {
        localStorage.removeItem(AppConstants.usernameKey);
      }

      if(this.loginInput.rememberMe) {
        // Store rememberMe to browser storage
        localStorage.setItem(AppConstants.rememberMeKey, `${this.loginInput.rememberMe}`)
      } else {
        localStorage.removeItem(AppConstants.rememberMeKey);
      }

      // Redirect user to dashboard
      if(apiResponse && apiResponse.id) {
        this._accountContext.token = apiResponse.data;
        localStorage.setItem(AppConstants.myTokenKey, apiResponse.data);
        this._router.navigate(['dashboard']);
      }
    })
  }

}
