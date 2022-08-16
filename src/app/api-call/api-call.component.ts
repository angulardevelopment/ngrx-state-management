import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiGetMockData, ApiGetMockDataWithError } from './store/action';
import { getStateError, getStateSelectedData } from './store/selector';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent  {

  error$: Observable<string>;
  data$: Observable<string>;
  JSON = JSON;

  constructor(private store: Store) {
    this.error$ = this.store.select(getStateError);
    this.data$ = this.store.select(getStateSelectedData);
  }

  getApiData() {
    // here you pass id because you have defined the id in action
    this.store.dispatch(ApiGetMockData({id: 'randomId'}));
  }

  getError() {
    this.store.dispatch(ApiGetMockDataWithError({id: 'randomId'}));
  }


}
