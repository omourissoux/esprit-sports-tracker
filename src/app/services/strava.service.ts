import { Injectable } from '@angular/core';
import { throwError, Observable, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, concatMap } from 'rxjs/operators';
import { Athlete } from '../models/athlete.model';
import { Activity, ActivityStats, RootObject } from '../models/activity.model';
import { ActivityZonesData } from '../models/zones.model';
import RefreshApiToken from '../models/refreshApiToken';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(
    private http: HttpClient
  ) {
   }

   public getAccessToken() : Observable<RefreshApiToken> {
    const url =
    // `${environment.stravaOAuth.tokenEndpoint}?client_id=${environment.stravaOAuth.clientId}&client_secret=${environment.stravaOAuth.dummyClientSecret}&refresh_token=${environment.stravaOAuth.refreshToken}&grant_type=refresh_token`;
    `${environment.stravaOAuth.tokenEndpoint}?client_id=${environment.stravaOAuth.clientId}&client_secret=${environment.stravaOAuth.dummyClientSecret}&code=${environment.stravaOAuth.athleteCode}&grant_type=authorization_code`;

    return this.http.post<RefreshApiToken>(url, {}).pipe(
      catchError(this.handleError)
    )
   }

  public makeAuthenticatedRequest(method: string = 'GET', path: string) {

    let url = `${environment.stravaBaseUrl}/${path}`;

    return this.http.request(method, url).pipe(
      catchError(this.handleError)
    )
  }

  public getAuthenticatedAthlete(): Observable<Athlete> {
    return this.makeAuthenticatedRequest('GET', `athlete`) as Observable<Athlete>;
  }

  public getAthleteStats(id: number): Observable<ActivityStats> {
    return this.makeAuthenticatedRequest('GET', `athletes/${id}/stats`) as Observable<ActivityStats>;
  }

  public getAthleteZones(): Observable<ActivityZonesData[]> {
    return this.makeAuthenticatedRequest('GET', 'athlete/zones') as Observable<ActivityZonesData[]>;
  }

  public getActivities(): Observable<Activity[]> {
    return this.makeAuthenticatedRequest('GET', 'athlete/activities') as Observable<Activity[]>;
  }

  public getActivityDetails(id: number): Observable<RootObject>{
    return this.makeAuthenticatedRequest('GET', `activities/${id}`) as Observable<RootObject>;
  }

  public getActivityZones(id: number): Observable<ActivityZonesData> {
    return this.makeAuthenticatedRequest('GET', `activities/${id}/zones`) as  Observable<ActivityZonesData>;
  }

  public testWithAccessToken() : Observable<Object> {

    const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    return this.getAccessToken().pipe(
      map((token) => this.http.get(`${environment.stravaBaseUrl}/athlete/activities?access_token=${token as any['access_token']}&after=${lastMonth.getTime()}`))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
