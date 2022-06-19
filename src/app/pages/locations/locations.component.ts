import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
import { Location, LocationQuery } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, OnDestroy {
  locations: Location[] | undefined;
  locationsSubscription = new Subscription();
  loading$ = this.locationsService.getLoadingState();
  error$ = this.locationsService.getErrorMessage();

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsSubscription = this.locationsService
      .getLocations('', '')
      .subscribe((locationsData) => {
        this.locations = locationsData.results;
      });
  }

  ngOnDestroy(): void {
    this.locationsSubscription.unsubscribe();
  }

  searchLocation(locationQuery: LocationQuery): void {
    this.locations = [] as Location[];

    this.locationsSubscription = this.locationsService
      .getLocations(locationQuery.name, locationQuery.dimension)
      .subscribe((locationsData) => {
        this.locations = locationsData.results;
      });
  }
}
