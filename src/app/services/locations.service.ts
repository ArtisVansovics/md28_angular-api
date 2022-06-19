import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, Observable } from 'rxjs';
import { LocationsData } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  baseUrl = 'https://rickandmortyapi.com/api/location/';
  loading = new BehaviorSubject(false);
  error = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  getLocations(name: string, dimension: string): Observable<LocationsData> {
    this.error.next(false);
    this.loading.next(true);

    return this.http
      .get<LocationsData>(`${this.baseUrl}?name=${name}&dimension=${dimension}`)
      .pipe(
        catchError((error) => {
          this.error.next(true);
          console.log(error);
          throw error;
        }),
        finalize(() => this.loading.next(false))
      );
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getErrorMessage(): Observable<boolean> {
    return this.error.asObservable();
  }
}
