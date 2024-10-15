import {Routes} from '@angular/router';
import {AudiobooksComponent} from '../components/audiobooks/audiobooks.component';
import {FavoritesComponent} from '../components/favorites/favorites.component';
import {GenresComponent} from '../components/genres/genres.component';
import {PagenotfoundComponent} from '../components/pagenotfound/pagenotfound.component';
import {LoginComponent} from '../components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/audiobooks',
    pathMatch: 'full'
  },
  {
    path: 'audiobooks',
    component: AudiobooksComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'genres',
    component: GenresComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
