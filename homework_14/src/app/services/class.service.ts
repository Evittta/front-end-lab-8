import { Injectable } from '@angular/core';

import { Classes, Class } from './../models/class.model';

@Injectable()
export class ClassService {
  constructor() {}

  public addNewClass(newClass: Class): void {
    newClass.id = Classes[Classes.length - 1].id + 1;
    Classes.push(newClass);
  }
  public removeClass(removedClass: Class): void {
    const id: number = Classes.indexOf(removedClass);
    Classes.splice(id, 1);
  }
  public editClass(oldClass: Class, newClass: Class): void {
    const id: number = Classes.indexOf(oldClass);
    Classes[id] = newClass;
  }
}
