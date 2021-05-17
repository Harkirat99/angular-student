import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','country','state','city','phonenumber','action'];
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getData()

  }
  getData() {
    this.customerService.search().subscribe((entites: Customer[]) => {
      this.customers = entites;
    })
  }
  select(id: string) {
    this.router.navigate(['customers', id]);
  }
  add() {
    this.router.navigate(['customers', 'new'])
  }
  delete(id: String) {
    this.customerService.delete(id).subscribe((message => {
      this.getData();
    }))
  }
  customerback() {
    this.router.navigate(['customers'])
  }
}