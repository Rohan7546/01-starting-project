import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex  = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return "assets/users/"+this.avatar;
  }
  onSelectUser(id: any) {
    this.select.emit(this.id);
  }
}
