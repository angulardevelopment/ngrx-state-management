import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';

// Its used with lazy loaded reducers. When you have (lazy loaded) feature modules and you want to register reducers within that module, then you use forFeature. Otherwise, in your AppModule you use forRoot.

@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [CustomerViewComponent,CustomerAddComponent]
})
export class CustomerModule { }
