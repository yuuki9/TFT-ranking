import { Component, ViewChild, AfterViewInit, ViewContainerRef, ComponentRef, createComponent } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';;
import interactionPlugin from '@fullcalendar/interaction';  
import timeGridPlugin from '@fullcalendar/timegrid';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('modalContainer', { read: ViewContainerRef }) modal?: ViewContainerRef;
  ModalComponent?: ComponentRef<ModalComponent>;
  TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    dateClick: (eventInfo) => {
      this.modal?.clear();      
      this.inputWinner(eventInfo.dateStr);
      if(this.TODAY_STR == eventInfo.dateStr){
        console.log("check")
      }
     
    }
  };

  constructor(){

  }


  ngAfterViewInit(): void {

  };

  inputWinner(date : string){
    this.ModalComponent = this.modal!.createComponent<ModalComponent>(ModalComponent);
    this.ModalComponent.instance.formData.thisday = date;
    this.ModalComponent.instance.closeModal = () => {
      this.modal?.clear();
    }
    this.ModalComponent.changeDetectorRef.detectChanges();
  };
}