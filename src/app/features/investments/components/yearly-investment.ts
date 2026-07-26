import { Component } from '@angular/core';

import {
   ApexAxisChartSeries,
   ApexNonAxisChartSeries,
   ApexChart,
   ApexXAxis,
   ApexStroke,
   ApexMarkers,
   ApexDataLabels,
   ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
   series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
   chart?: ApexChart;
   xaxis?: ApexXAxis;
   stroke: ApexStroke;
   markers: ApexMarkers;
   dataLabels?: ApexDataLabels;
   colors?: string[];
};

@Component({
   selector: 'app-yearly-investment',
   standalone: true,
   imports: [ChartComponent],
   template: `<div id="chart" class="card px-4 sm:py-8">
      <apx-chart
         [series]="chartOptions.series!"
         [chart]="chartOptions.chart!"
         [dataLabels]="chartOptions.dataLabels!"
         [xaxis]="chartOptions.xaxis!"
         [stroke]="chartOptions.stroke"
         [markers]="chartOptions.markers"
         [colors]="chartOptions.colors!"></apx-chart>
   </div> `,
})
export class YearlyInvestment {
   public chartOptions: ChartOptions = {
      series: [
         {
            name: 'Balance',
            data: [31, 150, 28, 51, 42, 109, 100],
         },
      ],
      chart: {
         height: 230,
         type: 'line',
      },
      colors: ['#EDA10D'],
      dataLabels: {
         enabled: false,
      },
      xaxis: {
         categories: ['2016', '2017', '2018', '2019', '2020', '2020'],
      },
      stroke: {
         curve: 'straight',
         width: 3,
      },
      markers: {
         size: 6,
         shape: 'circle',
      },
   };
}
