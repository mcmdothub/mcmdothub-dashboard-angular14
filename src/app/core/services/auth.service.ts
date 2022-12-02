import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { AppConstants, Endpoint } from "src/app/constants";
import { ILogin } from "../../pages/account/models/login.interface";
import { IAPIResponse } from "../models";
import { IUser } from "../models/user.interface";
import { AppHttpService } from "./app-http.service";

// Because i want this instance AuthService to be only 1
@Injectable({providedIn: 'root'})

export class AuthService {



  private _user: IUser;

  // create a getter for this
  public get user() {
    return this._user;
  }

  private _token: string;
  public get token() {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  constructor(private _httpClient: AppHttpService) {
    this._user = { firstName: '', profilePicPath: '', role: '', userCode: '' };
    this._token = localStorage.getItem(AppConstants.myTokenKey) || '';
  }

  /*
  API Endpoint: https://ytc.beginner2expert.com/angular14/api/public/lesssecure/account/login
  942001 / B2e@21 - Supervisor
  574040 / B2e@21 - Admin
  */
  login(input: ILogin): Observable<IAPIResponse> {
    // after adding Observable<IAPIResponse>
    // will have this error: "Type 'Observable<Object>' is not assignable to type 'Observable<IAPIResponse>'"
    // we will fix it by adding pipe to map the model
    return this._httpClient.post(Endpoint.login, input
    ).pipe(map(apiResponse => {
      const model = apiResponse as IAPIResponse;

      return model;
    }));
  }

  // method to fetch login user details
  loadUser() {
    // prepare an http header , the header is an object {}
    // this object will have an Authorization property Bearer pkus the token stored allready in the browser localstorage
    // const headers = {
    //   headers: {
    //     'Authorization': 'Bearer' + localStorage.getItem('myToken')
    //   }
    // };
    // after declare it as private _headers we just call it at the end "this._headers"

    // returns an Observable with Object
    return this._httpClient.get('public/secure/user/basic/details')
    .pipe(delay(2000))
    .pipe(map((apiResponse: any) => {
      //apiResponse.data.profilePic = 'https://ytc.beginner2expert.com/angular14/api/' + apiResponse.data.profilePic;
      //return apiResponse.data;

      this._user = {
        ...apiResponse.data,
        profilePicPath: apiResponse.data.profilePic,
        role: apiResponse.data.roleName,                         // when different name in the interface respect what it comes from http response "roleName" => we have to map "role: apiResponse.roleName"
      };

      return this._user;
    }))
  }

  logout() {
    return this._httpClient.get(Endpoint.logout);
  }
}
