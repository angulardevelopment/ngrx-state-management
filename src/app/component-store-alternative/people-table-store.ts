import { ComponentStore } from '@ngrx/component-store';
import { concatMap, tap } from 'rxjs/operators';

/** ComponentStore state interface */
interface PeopleTableState {
  //The authenticated user list
  peopleList: string[];
}

/** User Table ComponentStore */
class UserTableStore extends ComponentStore<PeopleTableState> {
  constructor() {
    // Set up initial State
    super({ peopleList: [] });
  }
  // Selectors
  // readonly peopleList$ = this.select(state => state.peopleList);
  // // Updaters
  //readonly  updateUserList = this.updater(state, peopleList => ({...state, peopleList}));
  //   readonly addCake = this.updater(
  //   (state: PeopleTableState, hasCake: boolean) => {
  //     return {...state, hasCake};
  //   });
  // // Effects
  // readonly fetchUserList = this.effect<Test>(trigger$ => trigger$.pipe(
  //     concatMap(() => api.getUserList().pipe(
  //         tap(peopleList => { this.updateUserList(peopleList); }),
  // ))));

}






