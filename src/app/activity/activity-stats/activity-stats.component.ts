import { CommonModule } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';
import { DistancePipe } from '../../shared/distance/distance.pipe';
import { StravaService } from '../../services/strava.service';
import { Observable } from 'rxjs';
import { ActivityZonesData } from '../../models/zones.model';

@Component({
  selector: 'app-activity-stats',
  standalone: true,
  imports: [CommonModule, DistancePipe],
  templateUrl: './activity-stats.component.html',
  styleUrl: './activity-stats.component.scss'
})
export class ActivityStatsComponent {

  @Input({transform: numberAttribute})
  activityId!: number;

  public zonesStats$!: Observable<ActivityZonesData>;

  constructor(private strava: StravaService){    
  }

  ngOnInit(): void {
    if (this.activityId) {
      this.zonesStats$ = this.strava.getActivityZones(this.activityId);
    }
  }
}
