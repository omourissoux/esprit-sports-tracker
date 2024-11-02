import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AthleteStatsComponent } from "../athlete-stats/athlete-stats.component";
import { AthleteZonesComponent } from "../athlete-zones/athlete-zones.component";

@Component({
  selector: 'app-athlete-summary',
  standalone: true,
  imports: [CommonModule, AthleteStatsComponent, AthleteZonesComponent],
  templateUrl: './athlete-summary.component.html',
  styleUrl: './athlete-summary.component.scss'
})
export class AthleteSummaryComponent {
  @Input() data: any;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
