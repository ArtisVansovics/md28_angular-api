import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, finalize, Observable } from 'rxjs';
import { CharactersData } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character/';
  loading = new BehaviorSubject(false);
  error = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  getCharacters(name: string, gender: string): Observable<CharactersData> {
    this.error.next(false);
    this.loading.next(true);

    return this.http
      .get<CharactersData>(`${this.baseUrl}?name=${name}&gender=${gender}`)
      .pipe(
        catchError((error) => {
          this.error.next(true);
          console.log(error);
          throw error;
        }),
        finalize(() => {
          this.loading.next(false);
        })
      );
  }

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getErrorMessage(): Observable<boolean> {
    return this.error.asObservable();
  }
}
