import { Component,OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-plan',
  templateUrl: './update-plan.component.html',
  styleUrls: ['./update-plan.component.css']
})
export class UpdatePlanComponent implements OnInit {

  ngOnInit(): void {}
  plan:Plan=new Plan();

  constructor(private planService:PlanService,
    private router:Router){}

    updatePlan(){
      this.planService.updatePlan(this.plan).subscribe(data=>{
        console.log(data);
        alert("Plan updated Successfully")
        this.goToPlanList();
        
      },
      error=>console.log(error));
     
    }

    goToPlanList(){
      this.router.navigate(['/plan-list'])
    }
  
    onSubmit(){
      console.log(this.plan);
      this.updatePlan();
    }
    
}
