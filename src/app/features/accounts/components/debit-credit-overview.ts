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
   selector: 'app-debit-credit-overview',
   imports: [ChartComponent],
   standalone: true,
   template: `<div id="chart" class="card p-4 sm:px-8">
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
   </div> `,
   styles: ``,
})
export class DebitCreditOverview {
   chartOptions: ChartOptions = {
      series: [
         {
            name: 'Debit',
            data: [44, 55, 57, 56, 61, 58, 63],
         },
         {
            name: 'Credit',
            data: [76, 85, 101, 105, 91, 114, 94],
         },
      ],
      chart: {
         type: 'bar',
         height: 320,
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: '65%',
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
      colors: ['#1A16F3', '#FCAA0B'],
      xaxis: {
         categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },
      yaxis: {
         labels: {
            show: false,
         },
      },
      fill: {
         type: 'solid',
         opacity: 1,
      },
      tooltip: {
         y: {
            formatter: (val: number) => `$${val} thousands`,
         },
      },
   };
}
