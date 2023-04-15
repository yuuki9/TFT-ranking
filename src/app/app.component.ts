import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { INITIAL_EVENTS, createEventId } from 'src/app/event-util';
import interactionPlugin from '@fullcalendar/interaction';  
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    dateClick: (eventInfo) => {
      // 그리드 날짜 클릭 이벤트 핸들러
      alert(`${eventInfo.dateStr}`);
      // 여기에 원하는 이벤트 처리 로직 추가
    },
    initialEvents: INITIAL_EVENTS,
  };


  ngAfterViewInit(): void {

  };

  handleEventClick(event: EventClickArg) {
    console.log(event)
  }

  dateClick(arg: any): void {
    console.log("chchch")
    console.log(arg)
  }
}