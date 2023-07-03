import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  user:User=new User();
  constructor(private registerService:RegisterService,
    private router:Router){}

  ngOnInit(): void {}

  registerUser(){
    this.registerService.registerUser(this.user).subscribe(data=>{
      console.log(data);
      alert("Successfully Registered")
      this.goToLogin()
    },
    error => console.log(error)
    );
  }

  goToLogin(){
    this.router.navigate(['login'])
  }

  onSubmit(){
    console.log(this.user);
    this.registerUser();
  }

  gotoLogin(){
    this.goToLogin()
  }
}
