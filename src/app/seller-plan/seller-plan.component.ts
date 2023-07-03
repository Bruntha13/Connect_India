import { Component,OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-plan',
  templateUrl: './seller-plan.component.html',
  styleUrls: ['./seller-plan.component.css']
})
export class SellerPlanComponent implements OnInit{

  plan:any;
  sname='';

  constructor(private planService:PlanService,
    private route:ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {
      this.getPlanOfSeller();
    }

    getPlanOfSeller(){
      this.sname=this.route.snapshot.params['sname'];
      console.log(this.sname);
      this.plan=new Plan();
      this.planService.getPlanBySeller(this.sname).subscribe(data=>{
        this.plan =data;
      });
    }

    deletePlan(plainid:number){
      this.planService.deletePlan(plainid).subscribe(data=>
        {
          console.log(data);
          this.getPlanOfSeller();
        })
    }

    goToPlanList(){
      this.router.navigate(['plan-list']);
    }
    addPlan(){
      this.router.navigate(['create-plan'])
    }
    
  updatePlan(){
    this.router.navigate(['update-plan']);
  }

}
