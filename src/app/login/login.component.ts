import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {email:"", password:""}
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    console.log(this.loginUserData);
    this.authservice.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.route.navigate(['/managers'])
          }

      //   {
      //   next(res) {
      //     console.log(res);
      //     localStorage.setItem('token', res.token)
          
      //   },
      //   error(msg) {
      //   console.log(msg);
        
      // }
      
      //   }
      )
  }

}
