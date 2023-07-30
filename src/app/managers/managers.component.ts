import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
managers:any =[]
  constructor(private eventservice:EventsService, private route:Router) { }

  ngOnInit(): void {
    this.eventservice.getManagers().subscribe(
      res => this.managers = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.route.navigate(['/login'])
          }
        }
      }
    )
  }

}
