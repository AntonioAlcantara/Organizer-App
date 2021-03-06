import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* const token: string = localStorage.getItem('token'); */

    const userId: number = +sessionStorage.getItem('userId');

    let request = req;

    if (userId) {
      request = req.clone({
        setHeaders: {
          USER: userId.toString()
        }
      });
    }

    return next.handle(request);
  }
}
