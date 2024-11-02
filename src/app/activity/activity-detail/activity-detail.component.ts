import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DistancePipe } from '../../shared/distance/distance.pipe';
import { RouterModule } from '@angular/router';
import { ActivityZonesData } from '../../models/zones.model';
import { StravaService } from '../../services/strava.service';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [CommonModule, DistancePipe, RouterModule],
  templateUrl: './activity-detail.component.html',
  styleUrl: './activity-detail.component.scss'
})
export class ActivityDetailComponent {
  @Input() activity: any;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
