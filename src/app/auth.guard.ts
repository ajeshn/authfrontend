import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService, private route:Router) {
    
  }
  canActivate(): boolean{
    if (this.authservice.loggedIn()) {
       return true;
    } else {
      this.route.navigate(['/login'])
      return false
    }
   
  }
  
}
