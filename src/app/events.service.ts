import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  // private employeesUrl = "http://localhost:3000/api/employees";
  // private managersUrl = "http://localhost:3000/api/managers";

  private employeesUrl =
    'https://node-authehtication.onrender.com/api/employees';
  private managersUrl =
    'https://node-authehtication.onrender.com/api/employees';
  getEmployees() {
    return this.http.get<any>(this.employeesUrl);
  }

  getManagers() {
    return this.http.get<any>(this.managersUrl);
  }
}
