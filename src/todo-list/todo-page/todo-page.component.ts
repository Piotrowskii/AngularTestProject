import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoTitleCardComponent } from '../todo-title-card/todo-title-card.component';
import { ToDoItemModel } from '../../models/todo-item-model';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { Icons } from '../../enums/Icons';
import { SelectModule } from 'primeng/select';

class IconItem {
  key: string = "";
  value: string = "";
}


@Component({
  selector: 'app-todo-page',
  imports: [TodoItemComponent,CommonModule,TodoTitleCardComponent,DialogModule,ButtonModule,InputTextModule,FormsModule,FloatLabel,TextareaModule,SelectModule],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit{

  testItem1: ToDoItemModel = new ToDoItemModel("bi bi-backpack","Kolos programowanie","1. Zabić się, 2. Zabić się 3. Może się zabić",false);
  testItem2: ToDoItemModel = new ToDoItemModel("bi bi-book", "Nauka do egzaminu", "1. Przejrzeć notatki, 2. Obejrzeć tutoriale, 3. Napisać ściągę", false);  
  testItem3: ToDoItemModel = new ToDoItemModel("bi bi-code-slash", "Projekt w Angularze", "1. Stworzyć komponenty, 2. Połączyć API, 3. Znaleźć i naprawić błędy", true);  
  testItem4: ToDoItemModel = new ToDoItemModel("bi bi-controller", "Przerwa na gaming", "1. Odpalić CS-a, 2. Zdenerwować się, 3. Wyłączyć CS-a", false);
  ItemList: ToDoItemModel[] = [this.testItem1,this.testItem2,this.testItem3,this.testItem4];

  ItemToDelete:ToDoItemModel = new ToDoItemModel();
  deletionPromptVisible: boolean = false;

  additionPromptVisible: boolean = false;
  icons: IconItem[] = [];
  newItemIcon: string = "";
  newItemTitle: string = "";
  newItemDescription: string = "";
  newItemFinished: boolean = false; 



  activeFilter: (item: ToDoItemModel) => boolean = (item: ToDoItemModel) => true;

  removeItem(item:ToDoItemModel): void{
    this.ItemToDelete = item;
    this.deletionPromptVisible = true;
  }

  trueRemoveItem(): void{
    this.deletionPromptVisible = false;
    if(this.ItemList.concat(this.ItemToDelete))
    {
      this.ItemList.splice(this.ItemList.indexOf(this.ItemToDelete),1);
    }
  }

  showAddPrompt():void{
    this.newItemIcon = "bi bi-clock";
    this.newItemTitle = "";
    this.newItemDescription = "";
    this.additionPromptVisible = true;
  }

  addItem(): void{
    this.additionPromptVisible = false;
    console.log(this.newItemIcon);
    this.ItemList.push(new ToDoItemModel(this.newItemIcon,this.newItemTitle,this.newItemDescription,false));
    this.newItemIcon = "";
    this.newItemTitle = "";
    this.newItemDescription = "";
  }

  filterChanged(filter:string):void{
    if(filter == "Wszystkie")
    {
      this.activeFilter = (item:ToDoItemModel) => true;
    }
    else if(filter == "Zrobione")
    {
      this.activeFilter = (item:ToDoItemModel) => item.finished == true;
    }
    else if(filter == "Niezrobione")
    {
      this.activeFilter = (item:ToDoItemModel) => item.finished == false;
    }
  }

  ngOnInit(): void {
    Object.entries(Icons).forEach(([key,value]) => {
      var newIconItem = new IconItem();
      newIconItem.key = key;
      newIconItem.value = value;
      this.icons.push(newIconItem);
    })
  }
}
