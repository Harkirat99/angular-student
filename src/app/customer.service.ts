import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = "http://localhost:9090/customers";


  constructor(private http: HttpClient) { }

  search(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
  get(id: string): Observable<Customer> {
    return this.http.get<Customer>(this.url + `/${id}`);
  }
  post(obj: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, obj);
  }
  put(id: String,obj: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.url + `/${id}`,obj);
  }
  delete(id: String) : Observable <Customer>{
    return this.http.delete<Customer>(this.url + `/${id}`);
  }
}
