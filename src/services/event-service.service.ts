import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  DarkModeChange = new EventEmitter();
  
  EmitDarkModeChange(): void{
    this.DarkModeChange.emit();
  }
}
