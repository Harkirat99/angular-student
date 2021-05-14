import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from './class'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  url = "http://localhost:9090/classes";

  constructor(private http: HttpClient) { }


  search(): Observable<Class[]> {
    return this.http.get<Class[]>(this.url);
  }
  get(id: string): Observable<Class> {
    return this.http.get<Class>(this.url + `/${id}`);
  }
  post(obj: Class): Observable<Class> {
    return this.http.post<Class>(this.url, obj);
  }
  put(id: String,obj: Class): Observable<Class>{
    return this.http.put<Class>(this.url + `/${id}`,obj);
  }
  delete(id: String) : Observable <Class>{
    return this.http.delete<Class>(this.url + `/${id}`);
  }


}