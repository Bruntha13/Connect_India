import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCredentials } from './user-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "http://localhost:8881/users/login";
  constructor(private httpClient:HttpClient) { }

  loginUser(usercred:UserCredentials):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,usercred);
  }
}
