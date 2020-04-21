import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesModule} from '../services/services.module';
import {AppRoutingModule} from '../app-routing.module';
import {PagesModule} from '../pages/pages.module';
import {SharedModule} from '../shared/shared.module';
import {AppStoreModule} from '../store';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    SharedModule,
    AppStoreModule,
    AppRoutingModule,
  ],
  exports: [
    SharedModule,
    AppRoutingModule
  ],
})

export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is only injected by appModule');
    }
  }
}
