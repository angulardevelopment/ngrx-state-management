import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomer  = createAction(
  // export const loadCustomers = createAction(
  // '[Customer] Load Customers'
  //  ‘Add Customer’ can be an action that will change the state (i.e. add a new customer to the list).

  '[Customer] Add Customer',
    (customer: Customer) => ({customer})
);




