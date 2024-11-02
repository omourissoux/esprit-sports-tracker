import { Component } from '@angular/core';
import { Observable, retry, concatMap, map, catchError, of, throwError } from 'rxjs';
import { StravaService } from '../../services/strava.service';
import { CommonModule } from '@angular/common';
import { AthleteSummaryComponent } from "../athlete-summary/athlete-summary.component";
import { ActivityDetailComponent } from "../../activity/activity-detail/activity-detail.component";

@Component({
  selector: 'app-athlete-detail',
  standalone: true,
  imports: [CommonModule, AthleteSummaryComponent, ActivityDetailComponent],
  templateUrl: './athlete-view.component.html',
  styleUrl: './athlete-view.component.scss'
})
export class AthleteViewComponent {
  public data$: Observable<any>;
  public activities$: Observable<any>;

  constructor(
    private stravaService: StravaService
  ) {

    this.data$ = this.stravaService.getAuthenticatedAthlete().pipe(
      retry(2),
      concatMap((athlete) => {
        return this.stravaService.getAthleteStats(athlete.id).pipe(
          retry(2),
          concatMap((stats) => {
            return this.stravaService.getAthleteZones().pipe(
              retry(2),
              map((zones) => {
                return { athlete, stats, zones }
              })
            )
          }),
          // map((stats) => {
          //   return {athlete, stats }
          // }),
          catchError((error) => {
            console.log('error', error)
            return of({ athlete, error })
          })
        )
      }),
      catchError((e) => {
        console.log('error 2', e)
        return throwError(e)
      })
    )

    this.activities$ = this.stravaService.getActivities().pipe(
      retry(2),
      map((res) => res.slice(0, 50)),
      catchError((e) => {
        return throwError(e)
      })
    )
  }

  ngOnInit(): void {
  }
}
