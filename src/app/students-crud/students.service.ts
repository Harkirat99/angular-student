import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url = "http://localhost:9090/students";

  constructor(private http: HttpClient) { }


  search(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }
  get(id: string): Observable<Student> {
    return this.http.get<Student>(this.url + `/${id}`);
  }
  post(obj: Student): Observable<Student> {
    return this.http.post<Student>(this.url, obj);
  }
  put(id: String,obj: Student): Observable<Student>{
    return this.http.put<Student>(this.url + `/${id}`,obj);
  }
  delete(id: String) : Observable <Student>{
    return this.http.delete<Student>(this.url + `/${id}`);
  }


}
