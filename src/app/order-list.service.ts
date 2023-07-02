import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  private baseURL = "http://localhost:8883/buyer/orders";
  constructor(private httpClient:HttpClient) { }

  getAllOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}`)
  }
  getOrderBySeller(sellername:string):Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}/${sellername}`);
  }
}
