import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticated = this.isAuthenticated$.asObservable();

  private token$: BehaviorSubject<string> = new BehaviorSubject('')
  public token = this.token$.asObservable();

  constructor(
  ) {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      this.setAuthenticatedUser(tokenFromStorage)
    }
  }
  
  public initCodeFlow() {
    // window.location.href = `${environment.authBaseUrl}/connect/strava/redirect?callback=${environment.hostBaseUrl}/login`
    window.location.href = `${environment.stravaOAuth.loginUrl}?client_id=${environment.stravaOAuth.clientId}&redirect_uri=http://localhost/exchange_token&response_type=code&approval_prompt=force&scope=${environment.stravaOAuth.scope}`
  }

  public setAuthenticatedUser(token: string) {
    this.isAuthenticated$.next(true)
    localStorage.setItem('token', token)
    this.token$.next(token);
  }

  public clearAuthenticatedUser() {
    this.isAuthenticated$.next(false)
    localStorage.removeItem('token')
    this.token$.next('')
  }

  public logOut() {
    console.log('logOut')
  }
}
