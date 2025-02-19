import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'weather-chart-card',
  imports: [ChartModule],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.css'
})
export class ChartCardComponent {
  
  @Input() labels: string[] = [];
  @Input() values: number[] = [];
  @Input() title: string = '';
  @Input() unit: string = '';

  data: any;
  options: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['labels'] || changes['values']) {
        this.initializeChart()
    }
}

  initializeChart(){

    var primaryColor: string = getComputedStyle(document.documentElement).getPropertyValue("--primary-500").trim();
    var primaryColor2: string = getComputedStyle(document.documentElement).getPropertyValue("--primary-200").trim();

    this.data ={
      labels: this.labels,
      datasets:[{
        label: this.unit,
        data: this.values,
        lineTension: 0.5,
        backgroundColor: primaryColor,
        borderColor: primaryColor2
      }
      ]

    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2, 
      plugins: {
        legend: {
          display: false  
        }
      }
    };
  }

  ngOnInit(): void {
    this.initializeChart();
  }
}
