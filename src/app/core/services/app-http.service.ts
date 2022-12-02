import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstants } from "src/app/constants";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})

// All Services will be injected here instead of HttpClient
// We will save here all the GET, POST, PUT requests used inside the app
export class AppHttpService {

  // private variable _headers
  private _headers = {
    headers: {
      'Authorization': 'Bearer' + localStorage.getItem(AppConstants.myTokenKey)
    }
  };

  constructor(
    private _httpClient: HttpClient
  ) {}

  public get(relativeUrl: string) {
    const url: string = environment.baseApi + relativeUrl;

    // get the latest token from the storage
    this._headers.headers.Authorization = 'Bearer' + localStorage.getItem(AppConstants.myTokenKey);

    return this._httpClient.get(url, this._headers);
  }

  public post(relativeUrl: string, data: any) {
    const url: string = environment.baseApi + relativeUrl;

    this._headers.headers.Authorization = 'Bearer' + localStorage.getItem(AppConstants.myTokenKey);

    return this._httpClient.post(url,data, this._headers);
  }


}
