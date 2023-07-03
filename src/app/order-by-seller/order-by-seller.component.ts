import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderListService } from '../order-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-by-seller',
  templateUrl: './order-by-seller.component.html',
  styleUrls: ['./order-by-seller.component.css']
})
export class OrderBySellerComponent implements OnInit{

  order:any;
  sellername='';
  constructor(private orderListService:OrderListService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrdersBySeller();
  }

  getOrdersBySeller(){
    this.sellername=this.route.snapshot.params['sellername'];
    console.log(this.sellername);
    this.order=new Order();
    this.orderListService.getOrderBySeller(this.sellername).subscribe(data=>{
      this.order=data;
    });
  }
  goToPlanList(){
    this.router.navigate(['plan-list']);
  }
  goToAllOrders(){
    this.router.navigate(['order-list'])
  }

}
