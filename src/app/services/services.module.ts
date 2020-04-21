import {InjectionToken, NgModule} from '@angular/core';
import {API_HOSTNAME} from '../constants/apiConstants';

export const API_CONFIG = new InjectionToken('ApiConfigToken');
const host: string =  API_HOSTNAME;

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: API_CONFIG, useValue: host},
  ]
})
export class ServicesModule { }
