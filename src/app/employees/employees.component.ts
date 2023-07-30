import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private eventsservice:EventsService) { }
employees:any=[]
  ngOnInit(): void {
    this.eventsservice.getEmployees()
      .subscribe(
        res => {
          this.employees = res
          
        }
        
      )
  }

}
