import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { SellerPlanComponent } from './seller-plan/seller-plan.component';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { OrderComponent } from './order/order.component';
import { PlanSellerComponent } from './plan-seller/plan-seller.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderBySellerComponent } from './order-by-seller/order-by-seller.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'plan-list',component:PlanListComponent},
  {path:'update-plan',component:UpdatePlanComponent},
  {path:'create-plan',component:CreatePlanComponent},
  {path:'seller-plan/:sname',component:SellerPlanComponent},
  {path:'buyer-page', component:BuyerPageComponent},
  {path:'order', component:OrderComponent},
  {path:'plan-seller/:sname',component:PlanSellerComponent},
  {path:'order-list',component:OrderListComponent},
  {path:'order-by-seller/:sellername',component:OrderBySellerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
