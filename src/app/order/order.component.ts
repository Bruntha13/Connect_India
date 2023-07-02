import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  ngOnInit(): void {}

  order:Order=new Order();
  constructor(private orderService:OrderService,
    private router:Router){}

    buy(){
      this.orderService.order(this.order).subscribe(data=>{
        console.log(data);
        alert("Order Successfull")
        this.goToBuyerPage();
      },
      error=>console.log(error));
    }

    goToBuyerPage(){
      this.router.navigate(['/buyer-page'])
    }
  
    onSubmit(){
      console.log(this.order);
      this.buy();
    }



}
