import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { ITask } from './task/task.model';
import { DUMMY_TASKS } from './task/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userName?: string;
  @Input({ required: true }) userId?: string;

  tasks: ITask[] = DUMMY_TASKS;
  isAddingNewTask: boolean = false;

  getUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  handleCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  onStartAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }
}
