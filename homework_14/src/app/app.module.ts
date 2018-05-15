import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ClassComponent } from './components/class/class.component';
import { ClassService } from './services/class.service';

@NgModule({
  declarations: [AppComponent, ScheduleComponent, ClassComponent],
  imports: [BrowserModule, FormsModule],
  providers: [ClassService],
  bootstrap: [AppComponent]
})
export class AppModule {}
