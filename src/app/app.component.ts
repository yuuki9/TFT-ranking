import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  ngAfterViewInit() {
    let calendarEl: HTMLElement = document.getElementById('calendar')!;
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ]
      // options here
    });
  
    calendar.render();

  }
}