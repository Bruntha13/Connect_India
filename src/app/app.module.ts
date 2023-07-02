import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { SellerPlanComponent } from './seller-plan/seller-plan.component';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { OrderComponent } from './order/order.component';
import { PlanSellerComponent } from './plan-seller/plan-seller.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderBySellerComponent } from './order-by-seller/order-by-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PlanListComponent,
    UpdatePlanComponent,
    CreatePlanComponent,
    SellerPlanComponent,
    BuyerPageComponent,
    OrderComponent,
    PlanSellerComponent,
    OrderListComponent,
    OrderBySellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
