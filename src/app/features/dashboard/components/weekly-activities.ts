import { Component } from '@angular/core';
import {
   ChartComponent,
   ApexAxisChartSeries,
   ApexChart,
   ApexDataLabels,
   ApexFill,
   ApexPlotOptions,
   ApexStroke,
   ApexTooltip,
   ApexXAxis,
   ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
   series: ApexAxisChartSeries;
   chart: ApexChart;
   xaxis: ApexXAxis;
   yaxis: ApexYAxis;
   plotOptions: ApexPlotOptions;
   dataLabels: ApexDataLabels;
   stroke: ApexStroke;
   fill: ApexFill;
   tooltip: ApexTooltip;
   colors: string[];
};

@Component({
   selector: 'app-weekly-activities',
   standalone: true,
   imports: [ChartComponent],
   template: `
      <div id="chart" class="card px-4 sm:p-8">
         <apx-chart
            [series]="chartOptions.series"
            [chart]="chartOptions.chart"
            [plotOptions]="chartOptions.plotOptions"
            [dataLabels]="chartOptions.dataLabels"
            [stroke]="chartOptions.stroke"
            [xaxis]="chartOptions.xaxis"
            [yaxis]="chartOptions.yaxis"
            [fill]="chartOptions.fill"
            [colors]="chartOptions.colors"
            [tooltip]="chartOptions.tooltip">
         </apx-chart>
      </div>
   `,
})
export class WeeklyActivities {
   public chartOptions: ChartOptions = {
      series: [
         {
            name: 'Deposit',
            data: [44, 55, 57, 56, 61, 58, 63],
         },
         {
            name: 'Withdraw',
            data: [76, 85, 101, 105, 91, 114, 94],
         },
      ],
      chart: {
         type: 'bar',
         height: 350,
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: '20%',
            borderRadius: 8,
            borderRadiusApplication: 'around',
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         show: false,
      },
      colors: ['#1814F3', '#16DBCC'],
      xaxis: {
         categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },
      yaxis: {
         title: {
            text: '$ (thousands)',
         },
      },
      fill: {
         type: 'solid',
         opacity: 1,
      },
      tooltip: {
         y: {
            formatter: (val: number) => `$ ${val} thousands`,
         },
      },
   };
}
