import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

// export const authGuard: CanActivateFn = (route, state) => {
//   console.log("Passei pelo guard")
//   const router = inject(Router);
//   const strToken = localStorage.getItem("token");
//   if (!strToken) {
//     router.navigate(["/"])
//     return false;
//   }
//   return true;
// };

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("dentro do auth novo")
    return true
    // return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}