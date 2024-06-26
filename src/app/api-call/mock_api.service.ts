import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs"
import { delay, map, tap } from "rxjs/operators"

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
  getApiError(): any {
    // getting an error after 1s
    return of(0).pipe(
      delay(1000),
      tap(() => {throw 'A random error'})
    )
  }

}
