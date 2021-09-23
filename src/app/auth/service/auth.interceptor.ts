import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor() { }

    
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('username') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          // Authorization: localStorage.getItem('token')
        }
      })
    }
    return next.handle(req);

  }

}