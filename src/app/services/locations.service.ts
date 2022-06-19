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
  errorMessage = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  getLocations(name: string, dimension: string): Observable<LocationsData> {
    this.loading.next(true);

    return this.http
      .get<LocationsData>(`${this.baseUrl}?name=${name}&dimension=${dimension}`)
      .pipe(
        catchError((error) => {
          this.errorMessage.next(error.message);
          console.log(error);
          throw error;
        }),
        finalize(() => this.loading.next(false))
      );
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getErrorMessage(): Observable<string> {
    return this.errorMessage.asObservable();
  }
}
