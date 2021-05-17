import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer({});
  id: string = ''
  constructor(private customersService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) {
      route.params.subscribe(params => {
        this.id = params.id
      })
  }

  ngOnInit(): void {

    this.getItem()

  }

  getItem() {
    this.customersService.get(this.id).subscribe((entity: Customer) => {
      this.customer = entity
    });
  }
  back() {
    this.router.navigate(['/customers'])
  }

  save() {
    this.customersService.put(this.id, this.customer).subscribe((item => {
      this.router.navigate([`customers`])
    }))
  }
}
