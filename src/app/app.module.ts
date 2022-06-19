import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './pages/characters/character-card/character-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterFormComponent } from './pages/characters/character-form/character-form.component';
import { LocationFormComponent } from './pages/locations/location-form/location-form.component';
import { LocationCardComponent } from './pages/locations/location-card/location-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CharactersComponent,
    LocationsComponent,
    CharacterCardComponent,
    CharacterFormComponent,
    LocationFormComponent,
    LocationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
