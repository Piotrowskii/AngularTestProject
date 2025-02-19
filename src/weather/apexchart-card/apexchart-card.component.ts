import { Component, Input,SimpleChanges, OnInit,EventEmitter, ViewChild, viewChild } from '@angular/core';
import { EventService } from '../../services/event-service.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { timeout } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  theme: ApexTheme;
};



@Component({
  selector: 'app-apexchart-card',
  imports: [ChartComponent],
  templateUrl: './apexchart-card.component.html',
  styleUrl: './apexchart-card.component.css'
})
export class ApexchartCardComponent implements OnInit{

  @Input() labels: string[] = [];
  @Input() values: number[] = [];
  @Input() title: string = '';
  @Input() unit: string = '';

  public chartOptions: ChartOptions;

  @ViewChild('chart') chart!: ApexCharts;

  ngOnChanges(changes: SimpleChanges) {
      if (changes['labels'] || changes['values']) {
          this.reloadChart();
      }
    }

  public reloadChart(): void{
    this.chartOptions.series = [{name: this.unit, data: this.values}];
    this.chartOptions.title = {text: this.title};
    this.chartOptions.xaxis = {categories: this.labels};
  }

  public async changeChartTheme(){
    const element = document.querySelector('html');
    if(element?.classList.contains('my-app-dark') == true){
      this.chartOptions.theme = {mode:"dark"}
    }
    else{
      this.chartOptions.theme = {mode:"light"}
    }

    if(this.chart != undefined){
      this.chart.updateOptions(this.chartOptions);
    }

  }

  constructor(private eventService: EventService) {

    var primaryColor: string = getComputedStyle(document.documentElement).getPropertyValue("--primary-500").trim();
    var primaryColor2: string = getComputedStyle(document.documentElement).getPropertyValue("--primary-200").trim();


    this.chartOptions = {      
      series: [
        {
          name: this.unit,
          data: this.values
        }
      ],
      chart: {
        height: 250,
        background: "transparent",
        type: "line",
        zoom: {
          enabled: false
        }
      },
      colors: [primaryColor, primaryColor2],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: this.title,
        align: "left",
        style:{
          color: "#FF0000",
          fontSize: "2px",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif"
        }
      },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: this.labels,
        labels:{
          show: true,
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      },
      theme:{
        mode: 'dark',
        palette: 'palette1'
      }
    };
  }

  ngOnInit(): void {

    this.changeChartTheme();

    this.eventService.DarkModeChange.subscribe(()=>{
      this.changeChartTheme();
    })
  }

  
}
