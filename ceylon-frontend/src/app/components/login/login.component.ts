import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;

  constructor (private authService : AuthService,
               private router:Router,
               private fb :FormBuilder){}

  ngOnInit(): void {
    this.authService.loginStatus.subscribe((loginStatus) =>{
      if(loginStatus){
        this.router.navigate(['/admin/home'])

      }else{
        alert("Unauthorized Action!")
        // console.log("Unauthorized Action!")
      }
    });

    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
      })
  }

  onLogin(){
    let data = this.loginForm.getRawValue();

    if(data.username == 'Thanuja' && data.password == 'password'){
      this.authService.login(true);
    }else{
      this.authService.login(false);
    }

    console.log("data", data )
    // this.authService.login(true);


  }
}
