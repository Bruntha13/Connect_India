import { Component,OnInit } from '@angular/core';
import { Plan } from '../plan';
import { PlanService } from '../plan.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-seller',
  templateUrl: './plan-seller.component.html',
  styleUrls: ['./plan-seller.component.css']
})
export class PlanSellerComponent implements OnInit{

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


    goToPlanList(){
      this.router.navigate(['buyer-page']);
    }

    buy(){
      this.router.navigate(['order'])
    }
}
