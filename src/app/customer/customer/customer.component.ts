import { Component, OnInit } from '@angular/core';
import { CustomerViewComponent } from '../customer-view/customer-view.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  standalone: true,
  imports: [CustomerViewComponent, CustomerAddComponent]
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
