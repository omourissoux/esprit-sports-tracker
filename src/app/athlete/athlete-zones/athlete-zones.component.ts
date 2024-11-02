import { Component, Input, signal, Signal, WritableSignal } from '@angular/core';
import { AthleteZonesData, ActivityZonesData, Boundaries, Zone } from '../../models/zones.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-athlete-zones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './athlete-zones.component.html',
  styleUrl: './athlete-zones.component.scss'
})
export class AthleteZonesComponent {
  @Input()
  public data!: Boundaries[];

  public displayZone!: WritableSignal<Zone>;

  constructor(){
  }

  
  ngOnInit(): void {
    console.log(this.data);
    this.displayZone = signal<Zone>({zoneNumber: 0, boundaries: this.data[0]});
  }

  switchTab(zoneNumber: number) {
    this.displayZone.set({zoneNumber: zoneNumber, boundaries: this.data[zoneNumber]});
  }
}
