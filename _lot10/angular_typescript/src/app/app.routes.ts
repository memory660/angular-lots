import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons/pidgeotto',
    loadComponent: () => import('./components/comp-for-route/comp-for-route.component').then((m) => m.CompForRouteComponent),
    data: {
      id: 17,
      backgroundColor: 'magenta',
      transformedText: 'magenta',
    }
  },

  {
    path: 'classic/:id',
    loadComponent: () => import('./components/comp-for-route-id-classic/comp-for-route-id-classic.component').then((m) => m.CompForRouteIdClassicComponent),
  },

  {
    path: 'signal1',
    loadComponent: () => import('./components/comp-signal1/comp-signal1.component').then((m) => m.CompSignal1Component),
  },


];
