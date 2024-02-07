import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTypeModule } from './pokemon-type/pokemon-type.module';
import { PokemonTypesState } from './pokemon-type/pokemon-types.state';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonsState } from './pokemon/pokemons.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonModule,
    PokemonTypeModule,
    NgxsModule.forRoot([PokemonTypesState, PokemonsState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
