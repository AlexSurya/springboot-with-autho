import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';
// import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

// import { POSHAN_STAGING_URL } from './constant';
// import { LocalStorage } from './../localStorageService';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RootService {
  private isUserLoggedIn;

  baseUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
    // console.log(this.localStorageService.getToken())
  }
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // params: new HttpParams().set('token', localStorage.getItem('token'))
    // params: new HttpParams().set('token', this.localStorageService.getToken())
  };

  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */


  get(url, token) {
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+ ' '+ token.access_token
    });
    return this.http
      .get(this.baseUrl + url, { headers: httpHeaders })
      .pipe(
        tap((response) => { }),
      );
  }

  public(url) {
    this.options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      // params: new HttpParams().set('token', localStorage.getItem('token'))
      // params: new HttpParams().set('token', this.localStorageService.getToken())
    };
    return this.http
      .get(this.baseUrl + url, this.options)
      .pipe(
        tap((response) => { }),
      );
  }




  post() {
    var url = "https://alexsurya.auth0.com/oauth/token";
    var datas = {
      "client_id": "Mv1wwqppNLo8At0YbGLCYbwHlVNESdY7",
      "client_secret": "rKsoEt3kmMS1PYGm7IBrRturmyl644nQ3LjZ-1UwkpUQTZigj1LPjfLVpA9MXa9D",
      "audience": "http://localhost:8080",
      "grant_type": "client_credentials"
    }



    this.options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(url, datas, this.options)
      .pipe(
        tap((response) => { }),
      );
  }
}