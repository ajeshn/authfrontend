import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {email:"", password:""}
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    console.log('register');
    
    this.authservice.registerUser(this.registerUserData)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.route.navigate(['/managers'])
      })
      
      
       
      
    
  }
}
