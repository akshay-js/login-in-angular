import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  
  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is to reqres.in API
    const isReqResApi = request.url.includes('reqres.in/api/');
    
    const headers: { [key: string]: string } = {
      'x-auth': this.cookieService.get('currentUser'),
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    };

    // Add x-api-key header for ReqRes API calls
    if (isReqResApi) {
      headers['x-api-key'] = 'reqres-free-v1';
    }

    request = request.clone({
      setHeaders: headers
    });    
    return next.handle(request);
  }
}
