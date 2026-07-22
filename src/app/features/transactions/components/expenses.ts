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
   selector: 'app-expenses',
   imports: [ChartComponent],
   template: `
      <div id="chart" class="card py-4">
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
   styles: ``,
})
export class Expenses {
   public chartOptions: ChartOptions = {
      series: [
         {
            name: 'Expense',
            data: [0, 55, 57, 96, 61, 58],
         },
      ],
      chart: {
         type: 'bar',
         height: 200,
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: '55%',
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
      colors: ['#16DBCC'],
      xaxis: {
         categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
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
