import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export function stravaInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (request.url.indexOf(environment.stravaBaseUrl) === 0) {
    const token = localStorage.getItem('token');
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    return next(modifiedRequest);
  }
  return next(request)
}
