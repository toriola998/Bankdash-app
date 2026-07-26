import { Component } from '@angular/core';
import {
   ApexNonAxisChartSeries,
   ApexChart,
   ApexStroke,
   ApexPlotOptions,
   ApexLegend,
   ApexResponsive,
   ApexDataLabels,
   ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
   series?: ApexNonAxisChartSeries;
   chart?: ApexChart;
   plotOptions?: ApexPlotOptions;
   legend?: ApexLegend;
   dataLabels?: ApexDataLabels;
   stroke?: ApexStroke;
   responsive?: ApexResponsive[];
   colors?: string[];
   labels?: string[];
};

@Component({
   selector: 'app-expense-statistics',
   standalone: true,
   imports: [ChartComponent],
   template: `
      <div id="chart" class="card px-4 sm:py-8">
         <apx-chart
            [series]="chartOptions.series!"
            [chart]="chartOptions.chart!"
            [labels]="chartOptions.labels!"
            [legend]="chartOptions.legend!"
            [plotOptions]="chartOptions.plotOptions!"
            [dataLabels]="chartOptions.dataLabels!"
            [stroke]="chartOptions.stroke!"
            [colors]="chartOptions.colors!"
            [responsive]="chartOptions.responsive!">
         </apx-chart>
      </div>
   `,
})
export class ExpenseStatistics {
   public chartOptions: ChartOptions = {
      series: [30, 15, 35, 20],
      labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
      colors: ['#343C6A', '#FC7900', '#FA00FF', '#1814F3'],
      chart: {
         type: 'pie',
         height: 300,
      },
      plotOptions: {
         pie: {
            dataLabels: {
               offset: -20,
            },
         },
      },
      dataLabels: {
         enabled: true,
         style: {
            colors: ['#fff'],
            fontSize: '13px',
            fontWeight: '600',
         },
         formatter: (val, opts) => {
            return [
               `${Math.round(val as number)}%`,
               `${opts.w.globals.labels[opts.seriesIndex]}`,
            ];
         },
      },
      legend: {
         show: false,
      },
      stroke: {
         width: 6,
         colors: ['#fff'],
      },
   };
}
