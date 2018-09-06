import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {HttpErrorResponse,HttpParams} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = "https://chatapi.edwisor.com";


  constructor(public http: HttpClient) { }
  public signupFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('firstName',data.firstName)
    .set('lastname',data.lastname)
    .set('mobile',data.mobile)
    .set('email',data.email)
    .set('password',data.password)
    .set('api',data.apiKey)

    return this.http.post('${this.url}/api/vl/users/signup',params);
  }

  public signinFunction(data):Observable<any>{
    const params = new HttpParams()
    
    .set('email',data.email)
    .set('password',data.password)
   

    return this.http.post('${this.url}/api/vl/users/login',params);
  }

}
