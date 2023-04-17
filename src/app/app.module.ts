import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ModalComponent } from './modal/modal.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    FullCalendarModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
