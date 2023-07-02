import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private baseURL = "http://localhost:8882/seller/plans";
  constructor(private httpClient:HttpClient) { }

  getAllPlans():Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(`${this.baseURL}`);
  }
 
  addPlan(plan:Plan):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,plan);
  }

  getPlanBySeller(sellername:string):Observable<Plan[]>{
    return this.httpClient.get<Plan[]>(`${this.baseURL}/${sellername}`);
  }

  updatePlan(plan:Plan):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,plan);
  }

  deletePlan(planid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${planid}`);
  }
}
