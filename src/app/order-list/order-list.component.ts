import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit{

  sellername:string="";
  order:any;
  constructor(private orderListService:OrderListService,
    private router: Router) { }
  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderListService.getAllOrders().subscribe(data=>{
      this.order=data;
    });
  }

  goToPlanList(){
    this.router.navigate(['plan-list']);
  }
  orderBySeller(sellername:string){
    this.router.navigate(['order-by-seller',sellername])
  }

}
