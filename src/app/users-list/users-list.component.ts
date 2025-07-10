import { Component, EventEmitter, Output, signal } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { IUser } from '../user/user.model';
import { AppComponent } from '../app.component';
import { TasksComponent } from '../tasks/tasks.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users-list',
  imports: [UserComponent, TasksComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  users = DUMMY_USERS;
  selectedUser?: IUser;

  getUsers() {
    return this.users;
  }

  getUserName(): string {
    return this.selectedUser ? this.selectedUser.name : '';
  }

  handleUserSelect(id: string) {
    console.log('User Clicked Id', id);
    this.selectedUser = this.users.find((user) => user.id === id)!;
  }
}
