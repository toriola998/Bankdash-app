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
   ApexTooltip,
   ApexYAxis,
   ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
   series?: ApexNonAxisChartSeries;
   chart?: ApexChart;
   plotOptions?: ApexPlotOptions;
   legend?: ApexLegend;
   dataLabels?: ApexDataLabels;
   stroke?: ApexStroke;
   responsive?: ApexResponsive[];
   tooltip: ApexTooltip;
   fill: ApexFill;
   yaxis: ApexYAxis;
   colors?: string[];
   labels?: string[];
};

@Component({
   selector: 'app-cards-expense-statistics',
   imports: [ChartComponent],
   template: `
      <div id="chart" class="card px-4 py-2">
         <apx-chart
            [series]="chartOptions.series!"
            [chart]="chartOptions.chart!"
            [labels]="chartOptions.labels!"
            [legend]="chartOptions.legend!"
            [plotOptions]="chartOptions.plotOptions!"
            [dataLabels]="chartOptions.dataLabels!"
            [stroke]="chartOptions.stroke!"
            [tooltip]="chartOptions.tooltip!"
            [fill]="chartOptions.fill!"
            [colors]="chartOptions.colors!"
            [yaxis]="chartOptions.yaxis"
            [responsive]="chartOptions.responsive!">
         </apx-chart>
      </div>
   `,
})
export class CardsExpenseStatistics {
   chartOptions: ChartOptions = {
      series: [50, 55, 75, 82],
      chart: {
         type: 'polarArea',
         height: 320,
         toolbar: { show: false },
      },
      labels: ['ABM Bank', 'BRC Bank', 'MCP Bank', 'DBL Bank'],
      colors: ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF'],
      stroke: { width: 0 },
      fill: {
         opacity: 1,
      },
      yaxis: {
         show: false,
      },

      // Remove default radial background grid lines & spokes
      plotOptions: {
         polarArea: {
            rings: {
               strokeWidth: 0,
            },
            spokes: {
               strokeWidth: 0,
            },
         },
      },
      dataLabels: {
         enabled: false,
      },
      legend: {
         position: 'bottom',
         horizontalAlign: 'center',
         fontSize: '15px',
         fontWeight: 500,
         labels: {
            colors: '#6C7A9C',
         },
         markers: {
            offsetX: -4,
         },
         itemMargin: {
            horizontal: 16,
            vertical: 10,
         },
      },
      tooltip: {
         enabled: true,
      },
   };
}
