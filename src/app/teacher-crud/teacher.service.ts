import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Teacher} from './teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url = "http://localhost:9090/teachers";


  constructor(private http: HttpClient) { }

  search(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.url);
  }
  get(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(this.url + `/${id}`);
  }
  post(obj: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.url, obj);
  }
  put(id: String,obj: Teacher): Observable<Teacher>{
    return this.http.put<Teacher>(this.url + `/${id}`,obj);
  }
  delete(id: String) : Observable <Teacher>{
    return this.http.delete<Teacher>(this.url + `/${id}`);
  }



}
