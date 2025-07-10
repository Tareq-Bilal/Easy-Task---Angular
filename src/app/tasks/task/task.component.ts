import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ITask } from './task.model';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task?: ITask;
  @Output() complete = new EventEmitter<string>();

  completeTask() {
    this.complete.emit(this.task?.id);
  }
}
