import { Component,OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-buyer-page',
  templateUrl: './buyer-page.component.html',
  styleUrls: ['./buyer-page.component.css']
})
export class BuyerPageComponent implements OnInit {

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

  buy(){
    this.router.navigate(['order'])
  }
  sellerPlan(sname:string){
    this.router.navigate(['plan-seller',sname])
  }
}
