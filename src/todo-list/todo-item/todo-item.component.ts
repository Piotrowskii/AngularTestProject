import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { ToDoItemModel } from '../../models/todo-item-model';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'todo-item',
  imports: [CommonModule,ButtonModule,ToggleButtonModule,FormsModule,DialogModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{

  @Input() ToDoItem:ToDoItemModel = new ToDoItemModel();

  @Output() removeItem = new EventEmitter<ToDoItemModel>();

  visible:boolean = false;

  public changeFinished(finished:boolean){
    if(finished){
      
    }
  }


}
