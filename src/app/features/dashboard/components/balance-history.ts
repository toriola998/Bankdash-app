import { Component } from '@angular/core';
import {
   ApexAxisChartSeries,
   ApexNonAxisChartSeries,
   ApexChart,
   ApexXAxis,
   ApexDataLabels,
   ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
   series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
   chart?: ApexChart;
   xaxis?: ApexXAxis;
   dataLabels?: ApexDataLabels;
   colors?: string[];
};

@Component({
   selector: 'app-balance-history',
   standalone: true,
   imports: [ChartComponent],
   template: `<div id="chart" class="card px-4 sm:py-8">
      <apx-chart
         [series]="chartOptions.series!"
         [chart]="chartOptions.chart!"
         [dataLabels]="chartOptions.dataLabels!"
         [xaxis]="chartOptions.xaxis!"
         [colors]="chartOptions.colors!"></apx-chart>
   </div> `,
   styles: ``,
})
export class BalanceHistory {
   public chartOptions: ChartOptions = {
      series: [
         {
            name: 'Balance',
            data: [31, 150, 28, 51, 42, 109, 100],
         },
      ],
      chart: {
         height: 230,
         type: 'area',
      },
      colors: ['#1814F3'],
      dataLabels: {
         enabled: false,
      },
      xaxis: {
         categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Sep', 'Nov', 'Dec'],
      },
   };
}
