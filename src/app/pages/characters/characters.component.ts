import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { Character, CharacterQuery } from '../../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] | undefined;
  charactersSubscription = new Subscription();
  loading$: Observable<boolean> | undefined;
  error$: Observable<boolean> | undefined;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService
      .getCharacters('', '')
      .subscribe((charactersData) => {
        this.characters = charactersData.results;
      });

    this.loading$ = this.charactersService.getLoadingState();
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
  }

  searchCharacter(characterQuery: CharacterQuery): void {
    this.characters = [] as Character[];

    this.charactersSubscription = this.charactersService
      .getCharacters(characterQuery.name, characterQuery.gender)
      .subscribe((charactersData) => {
        this.characters = charactersData.results;
      });

    this.loading$ = this.charactersService.getLoadingState();
    this.error$ = this.charactersService.getErrorMessage();
  }
}
