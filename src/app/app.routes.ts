import { Routes } from '@angular/router';
import {WeatherPageComponent} from "../weather/weather-page/weather-page.component";
import {Test1Component} from "../test/test1/test1.component";
import { TodoPageComponent } from '../todo-list/todo-page/todo-page.component';

export const routes: Routes = [
    {path: 'weather', component: WeatherPageComponent},
    {path: 'todo', component: TodoPageComponent}
];
