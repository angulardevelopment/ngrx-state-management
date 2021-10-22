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

    // here you pass id because you have defined the id in action
    this.store.dispatch(ApiGetMockData({id: 'randomId'}));
  }

  getError() {
    this.store.dispatch(ApiGetMockDataWithError({id: 'randomId'}));
  }


}

// https://jsonplaceholder.typicode.com/posts/1
// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

// POST
// {

//   "title": "foo",

//   "body": "bar",

//   "userId": 678

// }

// PUT
// {

//   "id": 1,

// "title": "foo",

// "body": "fsdfsd",

// "userId": 1



// }

