import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() name!: string;
@Input() userId!: string;
isAddingTask = false;
 constructor(private tasksService: TasksService) {}
get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId  )
}

onStartAddTask() {
this.isAddingTask = true;
}
onCancel() {
  this.isAddingTask = false;
}
}
