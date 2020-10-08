import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resourceUsage } from 'process';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId = ""
  password = ""
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  errorDataMessage = "Email is not registered"
  invalidData = false
  loggedInTo = ""

  constructor(
    private router:Router,
    private loginService:RegisterService
  ) { }

  ngOnInit(): void {
  }
   

  login(){
    let data = new FormData();
    data.append("emailId",this.emailId)
    data.append("password",this.password)
    this.loginService.executeEmployeeLoginService(data).subscribe(
      response => {
        if(response == 0){
          this.loginService.executeHrLoginService(data).subscribe(
            response1 => {
              if(response1 == 0){
                this.invalidLogin = true
              }
              else{
                localStorage.setItem("empEmail",this.emailId)
                this.router.navigate([''])
              }
            }
          )
        }
        else{
          localStorage.setItem("empEmail",this.emailId)
          this.router.navigate(['bot'])
        }
      }
    );
  }


}
