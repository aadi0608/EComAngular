import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, } from '@angular/router';
import { ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';
import { state } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})

export class Authguard implements CanActivate{
  constructor(private sellerService: SellerService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('seller')) {
      return true
    }
    return this.sellerService.isSellerLoggedIn;
  }
};
