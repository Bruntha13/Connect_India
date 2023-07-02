import { Component, OnInit} from '@angular/core';
import { UserCredentials } from '../user-credentials';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usercred:UserCredentials=new UserCredentials();
  constructor(private loginService:LoginService,
    private router:Router){}

  ngOnInit(): void {}


  loginUser(){
    this.loginService.loginUser(this.usercred).subscribe(data=>{
      console.log(data);
      alert("Successfully Logged In")
      this.goToPage();
    },
    error => {
      console.log(error);
      alert("Invalid Credentials")}
    );
  }

  goToPage(){
    if(this.usercred.role=="seller"){
      this.router.navigate(['/plan-list'])
    } 
    else if(this.usercred.role=="buyer"){
      this.router.navigate(['/buyer-page'])
    } 
    else{
      alert("Invalid Credentials")
    }
  }

  onSubmit(){
    console.log(this.usercred);
    this.loginUser();
  }

  gotoRegister(){
    this.router.navigate(['/register'])
  }
}
