import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input() userId!: string;
@Output() cancelButton = new EventEmitter<void>();
enteredTitle = '';
enteredSummary = '';
entereDate = '';
constructor(private tasksService: TasksService){}

onCancelButton() {
  this.cancelButton.emit();
}
onSubmit() {
  this.tasksService.addTask(
    {
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.entereDate  },
  this.userId
);
this.cancelButton.emit();
}
}
