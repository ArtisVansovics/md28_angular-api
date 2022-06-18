import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, take } from 'rxjs';
import { CharactersData } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharactersData> {
    return this.http.get<CharactersData>(this.baseUrl).pipe(
      take(1),
      catchError((error) => {
        console.log(error);
        throw error;
      })
    );
  }
}
