import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus =  new Subject();

  constructor() {

  }

  login(status: boolean){
    setTimeout(() =>{
      this.loginStatus.next(status);
    },1500);

  }
}
