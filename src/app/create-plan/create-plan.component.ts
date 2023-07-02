import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {
  ngOnInit(): void {}
 
  plan:Plan=new Plan();

  constructor(private planService:PlanService,
    private router:Router){}

    savePlan(){
      this.planService.addPlan(this.plan).subscribe(data=>{
        console.log(data);
        alert("Plan Successfully added")
        this.goToPlanList();
        
      },
      error=>console.log(error));
     
    }

    goToPlanList(){
      this.router.navigate(['/plan-list'])
    }
  
    onSubmit(){
      console.log(this.plan);
      this.savePlan();
    }
}
