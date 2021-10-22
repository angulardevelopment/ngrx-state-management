import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';


import { Observable, of, throwError } from 'rxjs';

import { switchMap, catchError, map, mergeMap,delay, tap, concatMap, exhaustMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ApiError, ApiGetMockData, ApiSuccess } from './action';
import * as DemoAction from './action';

@Injectable()
export class RootEffects {

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */




  constructor(private actions$: Actions, private http: HttpClient) { }

      // directly calling the effect
      public getMockDataEffect$ = createEffect(
        () => this.actions$
          .pipe(
            // pass action in oftype
            // ofType subscribes to the source stream of actions and pushes matching actions to the resulting stream. So it is indeed called once.
            ofType(ApiGetMockData),
            mergeMap((action) =>
              this.http.get(
               'https://jsonplaceholder.typicode.com/posts/1'
              ).pipe(
                map(res => {
                  return ApiSuccess({ data: res })
                }), catchError((err, caught: Observable<any>) => {
                  return throwError(err)
                })
              )
            )
          )
      );

      public getUserProfile$ = createEffect(
        () => this.actions$.pipe(

          ofType(DemoAction.setJSONData),

          mergeMap(() =>
            this.http.get<any>(
              'https://jsonplaceholder.typicode.com/posts',
            ).pipe(
              map(res => res),
            )
          ),


          mergeMap((res) =>

          [
            DemoAction.setJSONData(res)

          ]),

          catchError(err => {
            console.log(err, 'err');

            return [
            ];
          })
        ));

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
  // not in use
  getDataFromId(id: string): Observable<any> {
    // mock data Observable mapped from the passed id
    // delayed of 1000 ms
    return of({ id: 0, data: '' }).pipe(
      map(item => ({ id, data: 'Expanded data from id: ' + id })),
      delay(1000)
    )
  }

  // not in use
  getApiError(): Observable<any> {
    // getting an error after 1s
    return of(0).pipe(
      delay(1000),
      tap(() => {throw 'A random error'})
    )
  }

}
