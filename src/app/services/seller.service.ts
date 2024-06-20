import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { SignUp } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)

  private baseURL = 'http://192.168.0.120:3000'

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    let result = this.http.post('http://192.168.0.120:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.router.navigate(['seller-home']);


      });
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
