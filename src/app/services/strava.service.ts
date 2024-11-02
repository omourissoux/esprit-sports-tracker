import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Athlete } from '../models/athlete.model';
import { Activity, ActivityStats, RootObject } from '../models/activity.model';
import { ActivityZonesData } from '../models/zones.model';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  constructor(
    private http: HttpClient
  ) {
   }

  public makeAuthenticatedRequest(method: string = 'GET', path: string) {

    let url = `${environment.stravaBaseUrl}/${path}`;
    // const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
//, { headers: headers }
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
