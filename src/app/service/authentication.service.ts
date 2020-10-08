import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(name){
    sessionStorage.setItem("authenticateuser",name);
  }

  email(){
    let user = sessionStorage.getItem("authenticateuser");
    return user;
  }
}
