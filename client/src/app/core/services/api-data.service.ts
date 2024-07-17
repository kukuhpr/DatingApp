import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { SwalfireService } from './swalfire.service';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  token: any;

  constructor(
    private _httpClient: HttpClient,
    // private _auth: AuthenticationService,
    private _notif: SwalfireService
  ) {}

  async getAPI(url: string, event: any) {
    this.getToken();
    let rh: any;

    try {
      rh = await lastValueFrom(
        this._httpClient.get<any>(
          environment.config.BASE_URL_SYS + url + event,
          {
            headers: new HttpHeaders({
              Authorization: 'Bearer ' + this.token,
            }),
          }
        )
      );
    } catch (e: any) {
      throw e.message;
    }

    return rh;
  }

  async postAPI(url: string, body: any) {
    this.getToken();
    let rh: any;

    try {
      rh = await lastValueFrom(
        this._httpClient.post<any>(
          environment.config.BASE_URL_SYS + url,
          body,
          {
            headers: new HttpHeaders({
              Authorization: 'Bearer ' + this.token,
            }),
          }
        )
      );
    } catch (e: any) {
      this._notif.ErrorMessage(this.errorMessage(e));
      throw e.message;
    }

    return rh;
  }

  async getAPIWithParams(url: string, event: string, queryParam: any) {
    this.getToken();
    let rh: any;

    try {
      rh = await lastValueFrom(
        this._httpClient.get<any>(
          environment.config.BASE_URL_SYS + url + event,
          {
            headers: new HttpHeaders({
              Authorization: 'Bearer ' + this.token,
            }),
            params: queryParam,
          }
        )
      );
    } catch (e: any) {
      throw e.message;
    }

    return rh;
  }

  errorMessage(e: any) {
    let error: string;
    if (e.error?.error) {
      error = e.error.error;
    } else if (e.error?.message) {
      error = e.error.message;
    } else if (e.message) {
      error = e.message;
    } else {
      error = e;
    }

    error = error.replace('[Microsoft]', '');
    error = error.replace('[ODBC Driver 17 for SQL Server]', '');
    error = error.replace('[SQL Server]', '');
    if (error == 'Undefined property: stdClass::$id')
      error = 'Terjadi Kesalahan!';

    return error;
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')!;
      // this.token = this._encryption.CryptoJSAesDecrypt(this.token.data);
    }
  }
}
