import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ToggleButton } from 'primeng/togglebutton';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../../services/event-service.service';

@Component({
  selector: 'app-app-navbar',
  imports: [ButtonModule,Menubar,ToggleButton,CommonModule,FormsModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent implements OnInit{

  checked: boolean = false;

  isDarkModeToogled(): boolean{
    const element = document.querySelector('html');
    return (element?.classList.contains('my-app-dark') == true);
  }

  darkModeToogle(){
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');

    if(this.isDarkModeToogled()) localStorage.setItem('darkMode','true'), this.checked = false;
    else localStorage.setItem('darkMode','false'), this.checked = true;

    this.eventService.EmitDarkModeChange();
  }

  items: MenuItem[] = [];

  constructor(private eventService:EventService){

  }

  ngOnInit(): void {

    this.checked = true;

    var prefersDarkMode: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(localStorage.getItem('darkMode') !== null)
    {
      if(localStorage.getItem('darkMode') == 'true' && !this.isDarkModeToogled()) this.darkModeToogle();
      else if(localStorage.getItem('darkMode') == 'false' && this.isDarkModeToogled()) this.darkModeToogle();
    }
    else
    {
      if(prefersDarkMode && !this.isDarkModeToogled()){
        this.darkModeToogle();
      }
      else if(!prefersDarkMode && this.isDarkModeToogled()){
        this.darkModeToogle();
      }
    }

    this.items = [
      {
        label: "Pogoda",
        routerLink: "/weather",
        icon: 'pi pi-cloud'
      },
      {
        label: "Lista Zadań",
        routerLink: "/todo",
        icon: 'pi pi-pencil'
      },
      
    ]
  }
}
