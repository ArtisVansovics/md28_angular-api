import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationQuery } from '../../../models/location.model';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss'],
})
export class LocationFormComponent implements OnInit {
  @Output() searchLocationsEvent = new EventEmitter<LocationQuery>();

  locationsForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.locationsForm = this.fb.group({
      name: '',
      dimension: '',
    });
  }

  searchLocations(): void {
    if (this.locationsForm.valid) {
      this.searchLocationsEvent.emit({
        name: this.locationsForm.value.name,
        dimension: this.locationsForm.value.dimension,
      });
    }
  }
}
