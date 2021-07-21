# About
state management using ngrx

packages used-
@ngrx/store, @ngrx/store-devtools, @ngrx/effects, 

@ngrx/entity, @ngrx/schematics@latest

Setup customer folder-
ng generate module Customer
ng generate class models/customer

ng generate action customer/store/action/Customer
ng generate reducer customer/store/reducer/Customer
ng generate selector customer/store/selector/Customer

ng generate component customer/CustomerView
ng generate component customer/CustomerAdd

Add- 
StoreModule for Feature in Customer Module
StoreModule.forFeature(customerFeatureKey, reducer),

Add the exports-
exports: [CustomerViewComponent,CustomerAddComponent]


create reducer and its initial state 
create action
add functionality in reducer (using actions that you created)
create selector and return data
create effects

dispatch - call action

Basic component folder-
reducer includes (main code +1, -1, 0)
store includes action(increment , decrement, reset)
component includes selector (final data) 

Install Redux dev tool chrome extension

# Ngrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
