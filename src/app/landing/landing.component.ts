import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((d) => {
      if (d['access_token']) {
        this.authService.setAuthenticatedUser(d['access_token']);
        this.router.navigate(['athlete'])
      }
    })
  }

  ngOnInit(): void {
  }

  initCodeFlow() {
    this.authService.initCodeFlow();
  }
}
