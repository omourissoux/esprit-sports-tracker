import { Component, Input } from '@angular/core';
import { ActivityStats, ActivityTotal } from '../../models/activity.model';
import { CommonModule } from '@angular/common';
import { DistancePipe } from '../../shared/distance/distance.pipe';

@Component({
  selector: 'app-athlete-stats',
  standalone: true,
  imports: [CommonModule, DistancePipe],
  templateUrl: './athlete-stats.component.html',
  styleUrl: './athlete-stats.component.scss'
})
export class AthleteStatsComponent {
  @Input()
  data!: ActivityStats;
  public selectedTab: string = 'run';
  public allTimeDisplayData!: ActivityTotal;
  public recentDisplayData!: ActivityTotal;

  constructor() {
    
  }

  ngOnInit(): void {
    this.allTimeDisplayData = this.data.all_run_totals;
    this.recentDisplayData = this.data.recent_run_totals;
  }

  switchTab(activity: string) {
    this.selectedTab = activity;

    switch (activity) {
      case 'ride':
        this.displayRideData();
        break;
      case 'run':
        this.displayRunData();
        break;
      case 'swim':
        this.displaySwimData();
        break;
      default:
        break;
    }
  }

  private displayRideData(): void  {
    this.allTimeDisplayData = this.data.all_ride_totals;
    this.recentDisplayData = this.data.recent_ride_totals;
  }

  private displayRunData(): void {
    this.allTimeDisplayData = this.data.all_run_totals;
    this.recentDisplayData = this.data.recent_run_totals;
  }

  private displaySwimData(): void {
    this.allTimeDisplayData = this.data.all_swim_totals;
    this.recentDisplayData = this.data.recent_swim_totals;
  }
}
