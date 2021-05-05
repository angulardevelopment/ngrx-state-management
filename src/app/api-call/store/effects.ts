import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';


import { Observable, of, throwError } from 'rxjs';

import { switchMap, catchError, map, mergeMap,delay, tap, concatMap, exhaustMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ApiError, ApiGetMockData, ApiSuccess } from './action';

@Injectable()
export class RootEffects {

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */




  constructor(private actions$: Actions, private http: HttpClient) { }

    // effect from simulating an API call success
    // getMockDataEffect$ = createEffect(
    //   () => this.actions$.pipe(
    //     ofType(ApiGetMockData),
    //     tap(() => { console.log('new getMockDataEffect occurred in queue') }),
    //     mergeMap((action) => {
    //       console.log('new getMockDataEffect running')
    //       return this.getDataFromId(action.id).pipe(
    //         map(res => ApiSuccess({ data: res })),
    //         catchError(error => of(ApiError({ error }))),
    //         tap(() => { console.log('getMockDataEffect Finished') })
    //       )
    //     }
    //     )
    //   )
    // )
    public getMockDataEffect$ = createEffect(
      () => this.actions$
        .pipe(
          ofType(ApiGetMockData),
          mergeMap((action) =>
            this.http.get(
             'https://jsonplaceholder.typicode.com/posts/1'
            ).pipe(
              map(res => {
                console.log(res, 'response');
                return ApiSuccess({ data: res })
              }), catchError((err, caught: Observable<any>) => {
                console.log(err, 'err');
                return throwError(err)
              })
            )
          )
        )
    );
    // effect for simulating an API error
    // getMockDataWithErrorEffect$ = createEffect(
    //   () => this.actions$.pipe(
    //     ofType(ApiGetMockDataWithError),
    //     tap(() => { console.log('new getMockDataWithErrorEffect occurred in queue') }),
    //     mergeMap((action) => {
    //       console.log('new getMockDataWithErrorEffect running')
    //       return this.mockApi.getApiError().pipe(
    //         map(res => ApiSuccess({ data: res })),
    //         catchError(error => of(ApiError({ error }))),
    //         tap(() => { console.log('getMockDataWithErrorEffect Finished') })
    //       )
    //     }
    //     )
    //   )
    // )
}


@Injectable({ providedIn: 'root' })
export class MockApiService {
  getDataFromId(id: string): Observable<any> {
    // mock data Observable mapped from the passed id
    // delayed of 1000 ms
    return of({ id: 0, data: '' }).pipe(
      map(item => ({ id, data: 'Expanded data from id: ' + id })),
      delay(1000)
    )
  }

  getApiError(): Observable<any> {
    // getting an error after 1s
    return of(0).pipe(
      delay(1000),
      tap(() => {throw 'A random error'})
    )
  }

}
