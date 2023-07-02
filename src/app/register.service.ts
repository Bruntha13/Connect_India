import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = "http://localhost:8881/users/register";
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
