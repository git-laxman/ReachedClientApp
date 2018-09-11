import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { JwtHelperService } from '@auth0/angular-jwt';
// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private router : Router){}
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot):  boolean {
//       if (localStorage.getItem('userToken') != null)
//       return true;
//       this.router.navigate(['/login']);
//       return false;
//   }
// }



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate() {
    debugger;
//     var token = localStorage.getItem("jwt");
// debugger
//     if (token && !this.jwtHelper.isTokenExpired(token)){
//       console.log(this.jwtHelper.decodeToken(token));
//       return true;
//     }
//     this.router.navigate(["login"]);
//     return false;

if(localStorage.getItem('jwt')!=null){
  return true;
}
this.router.navigate(['/login']);
        return false;
  }
}