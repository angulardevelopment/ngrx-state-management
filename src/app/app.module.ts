import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { CustomerModule } from './customer/customer.module';
// import { reducers, metaReducers } from './reducers';
import { BasicComponent } from './basic/basic.component';
import { counterReducer } from './basic/counter.reducer';
import { ApiCallComponent } from './api-call/api-call.component';
import { RootEffects } from './api-call/store/effects';
import { rootReducer } from './api-call/store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { favoriteReducer } from './product/reducer';
import { HomeComponent } from './product/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ApiCallComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // StoreModule.forRoot({ count: counterReducer, rootState: rootReducer }),
        // other ways to add reducer (reducers, { metaReducers }),({}),
    StoreModule.forRoot({favorite:favoriteReducer}),

    EffectsModule.forRoot([RootEffects]),  // here you can pass multiple effects

    // for debugging enable this instrument in development mode
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    CustomerModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
