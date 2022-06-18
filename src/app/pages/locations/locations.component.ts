import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  locations: Location[] | undefined;
  locationsSubscription = new Subscription();
  loading$: Observable<boolean> | undefined;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsSubscription = this.locationsService
      .getLocations()
      .subscribe((locationsData) => {
        this.locations = locationsData.results;
      });
    this.loading$ = this.locationsService.getLoadingState();
  }

  ngOnDestroy(): void {
    this.locationsSubscription.unsubscribe();
  }
}
