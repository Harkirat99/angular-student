import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlNew = "http://localhost:9090/api/newUser";
  url = "http://localhost:9090/api/login";

  constructor(private http: HttpClient) { }

  postNew(obj: User): Observable<User> {
    return this.http.post<User>(this.urlNew, obj);
  }

  postLogin(obj: User): Observable<User> {
    return this.http.post<User>(this.url, obj);
  }

}
