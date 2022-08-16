import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { CustomerModule } from './customer/customer.module';
// import { reducers, metaReducers } from './reducers';
import { BasicComponent } from './basic/basic.component';
import { counterReducer } from './basic/counter.reducer';
import { ApiCallComponent } from './api-call/api-call.component';
import { RootEffects } from './api-call/store/effects';
import { rootReducer } from './api-call/store/reducer';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot({ count: counterReducer, rootState: rootReducer }),
    // other ways to add reducer (reducers, { metaReducers }),({}), 

    EffectsModule.forRoot([RootEffects]),  // here you can pass multiple effects

    // for debugging enable this instrument in development mode
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    CustomerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
