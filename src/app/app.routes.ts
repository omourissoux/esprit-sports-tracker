import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './guards/auth.guard';
import { AthleteViewComponent } from './athlete/athlete-view/athlete-view.component';
import { ActivityStatsComponent } from './activity/activity-stats/activity-stats.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LandingComponent },
    { path: 'athlete', component: AthleteViewComponent, canActivate: [AuthGuard]},
    { path: 'athlete/activity-stats/:activityId', component: ActivityStatsComponent, canActivate: [AuthGuard]},
];
