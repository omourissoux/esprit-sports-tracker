import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './layout/header/header.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    HeaderComponent,
    AsyncPipe,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esprit-sports-tracker';
  public isLoggedIn: Observable<any>;

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.isAuthenticated;
  }
}


