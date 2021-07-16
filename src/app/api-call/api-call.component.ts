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
    // with the store method you will get the data
    //   in  select method you need to pass selector
    this.error$ = this.store.select(getStateError);
    this.data$ = this.store.select(getStateSelectedData);
  }

  getApiData() {
    // with the dispatch you can send data
    //   in  dispatch method you need to pass action

    this.store.dispatch(ApiGetMockData({id: 'randomId'}));
  }

  getError() {
    this.store.dispatch(ApiGetMockDataWithError({id: 'randomId'}));
  }


}
