import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '../../shared/ui/analytics-card';

@Component({
   selector: 'app-investments',
   imports: [PageLayout, AnalyticsCard],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 lg:grid-cols-3">
            @for (item of accountanalytics; track item.id) {
               <app-analytics-card [analytics]="item"></app-analytics-card>
            }
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
