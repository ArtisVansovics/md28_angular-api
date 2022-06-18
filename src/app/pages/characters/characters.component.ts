import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { Subscription } from 'rxjs';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] | undefined;
  charactersSubscription = new Subscription();

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersSubscription = this.charactersService
      .getCharacters()
      .subscribe((charactersData) => {
        this.characters = charactersData.results;
      });
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
  }
}
