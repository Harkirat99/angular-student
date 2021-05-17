import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';

     
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer({});

  constructor(private CustomersService:CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  createClass() {
    this.CustomersService.post(this.customer).subscribe(item => {
      this.router.navigate(['customers', item.id])
    })
  } 
  
  back(){
    this.router.navigate(['customers'])
  }
}
