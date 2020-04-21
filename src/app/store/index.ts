import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment.prod';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'ngrx App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule  { }
