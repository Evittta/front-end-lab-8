import { Component, OnInit, Input } from '@angular/core';

import { Class, Classes } from './../../models/class.model';
import { ClassService } from './../../services/class.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  public classes: Class[] = Classes;
  public newTopic: Class = { id: 0, topic: '', lecturer: '', date: '' };
  public adding: boolean = false;

  constructor(private classService: ClassService) {}

  ngOnInit() {}

  public addClass(): void {
    const newClass = Object.assign({}, this.newTopic);
    this.reset(this.newTopic);
    this.classService.addNewClass(newClass);
    this.adding = false;
  }
  private reset(topic: Class): void {
    for (let field in topic) {
      topic[field] = null;
    }
  }
}
