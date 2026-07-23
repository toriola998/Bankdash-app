import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '../../shared/ui/analytics-card';
import { YearlyInvestment } from './components/yearly-investment';
import { MonthlyRevenue } from './components/monthly-revenue';

@Component({
   selector: 'app-investments',
   imports: [PageLayout, AnalyticsCard, YearlyInvestment, MonthlyRevenue],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 lg:grid-cols-3">
            @for (item of accountanalytics; track item.id) {
               <app-analytics-card [analytics]="item"></app-analytics-card>
            }
         </div>

         <div class="mt-5 flex flex-col gap-5 lg:grid grid-cols-2">
            <section>
               <h2 class="page-title mb-5">Yearly Total Investment</h2>
               <app-yearly-investment></app-yearly-investment>
            </section>
            <section>
               <h2 class="page-title mb-5">Monthly Revenue</h2>

               <app-monthly-revenue></app-monthly-revenue>
            </section>
         </div>
      </app-page-layout>
   `,
   styles: ``,
})
export class Investments {
   accountanalytics: Analytics[] = [
      {
         id: 0,
         title: 'Total Invested Amount',
         amount: '$150,750',
         icon: '/icons/investments/total-investment.svg',
         iconTheme: 'bg-green-1',
      },
      {
         id: 1,
         title: 'No of investments',
         amount: '1,250',
         icon: '/icons/investments/no-of-investments.svg',
         iconTheme: 'bg-pink',
      },
      {
         id: 2,
         title: 'Rate of return',
         amount: '$12,750',
         icon: '/icons/investments/return-rate.svg',
         iconTheme: 'bg-blue-4',
      },
   ];
}
