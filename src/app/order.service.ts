import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURL = "http://localhost:8883/buyer/plans";
  constructor(private httpClient:HttpClient) { }

  order(order:Order):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,order);
  }
}
