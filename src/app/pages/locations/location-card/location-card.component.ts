import { Component, Input } from '@angular/core';
import { Location } from '../../../models/location.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input() location: Location | undefined;
}
