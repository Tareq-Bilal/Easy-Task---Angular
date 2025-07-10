import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) isActive!: boolean;
  @Output() userClicked = new EventEmitter<string>();

  onSelectUser() {
    this.userClicked.emit(this.user.id);
  }
}
