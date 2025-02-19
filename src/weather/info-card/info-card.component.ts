import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'weather-info-card',
  imports: [CardModule,CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent{

  @Input() icon: string = "";
  @Input() value: number = 0;
  @Input() unit: string = "";
  @Input() size: string = "4rem";

  get sizeStyle(): any {
    return { 'font-size': this.size };
  }

  get iconClass(): string {
    return this.icon;
  }

}
