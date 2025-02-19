import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-title-card',
  imports: [SelectModule,FormsModule],
  templateUrl: './todo-title-card.component.html',
  styleUrl: './todo-title-card.component.css'
})
export class TodoTitleCardComponent implements OnInit{

  filters :string[] = [];
  selected: string = "";

  @Output() filterChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.filters = ["Wszystkie","Niezrobione","Zrobione"];
  }
}
