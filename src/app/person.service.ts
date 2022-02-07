import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models";

const baseurl = "https://jsonplaceholder.typicode.com/"

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private readonly http: HttpClient) {
  }

  public getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(baseurl + "users");
  }

  public updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(baseurl + "users", person)
  }
}
