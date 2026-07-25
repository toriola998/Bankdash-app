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
   colors?: string[];
   labels?: string[];
};

@Component({
   selector: 'app-cards-expense-statistics',
   imports: [ChartComponent],
   template: `
      <div id="chart" class="card px-4 sm:py-8 chart-card">
         <div class="chart-wrapper">
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
               [responsive]="chartOptions.responsive!">
            </apx-chart>

            <!-- Center cutout overlay to create the doughnut hole -->
            <div class="donut-hole"></div>
         </div>
      </div>
   `,
   styles: `
      .chart-card {
         background: #ffffff;
         padding: 32px 24px;
         border-radius: 28px;
         box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
         width: 360px;
      }
      .chart-wrapper {
         position: relative;
      }
      .donut-hole {
         position: absolute;
         top: 128px;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 90px;
         height: 90px;
         background-color: #ffffff;
         border-radius: 50%;
         pointer-events: none;
         z-index: 2;
      }
   `,
})
export class CardsExpenseStatistics {
   chartOptions: ChartOptions = {
      series: [100, 55, 75, 82],
      chart: {
         type: 'polarArea',
         height: 380,
         toolbar: { show: false },
      },
      labels: ['ABM Bank', 'BRC Bank', 'MCP Bank', 'DBL Bank'],
      colors: ['#16DBCC', '#FF82AC', '#FFBB38', '#4C78FF'],
      stroke: { width: 0 },
      fill: {
         opacity: 1,
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
