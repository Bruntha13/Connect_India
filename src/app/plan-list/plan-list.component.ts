import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  sellername:string='';
  sname:string='';
  plan: any;
  constructor(private planService: PlanService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPlans();
  }

  getPlans() {
    this.planService.getAllPlans().subscribe(data=>
      {
        this.plan=data;
      });
  }
  addPlan(){
    this.router.navigate(['create-plan'])
  }
  
sellerPlan(sname:string){
  this.router.navigate(['seller-plan',sname])
}

updatePlan(){
  this.router.navigate(['update-plan']);
}

deletePlan(plainid:number){
  this.planService.deletePlan(plainid).subscribe(data=>
    {
      console.log(data);
      this.getPlans();
    })
}
allOrders(){
  this.router.navigate(['order-list'])
}
orderBySeller(sellername:string){
  this.router.navigate(['order-by-seller',sellername])
}
}
