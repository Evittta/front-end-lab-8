import { Component, OnInit, Input } from '@angular/core';

import { Class } from './../../models/class.model';
import { ClassService } from './../../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() class: Class;
  public newClass: Class;
  public isEditing: boolean = false;

  constructor(private classService: ClassService) {}

  ngOnInit() {}

  public startEdit(): void {
    this.newClass = { ...this.class };
    this.isEditing = true;
  }
  public edit(): void {
    this.classService.editClass(this.class, this.newClass);
    this.isEditing = false;
  }
  public removeClass(): void {
    this.classService.removeClass(this.class);
  }
  public discardChanges(changedClass: Class): void {
    changedClass = this.class;
    this.isEditing = false;
  }
}
