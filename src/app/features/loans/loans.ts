import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '../../shared/ui/analytics-card';

@Component({
   selector: 'app-loans',
   imports: [PageLayout, AnalyticsCard],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 xl:grid-cols-4">
            @for (item of loanAnalytics; track item.id) {
               <app-analytics-card [analytics]="item"></app-analytics-card>
            }
         </div>
      </app-page-layout>
   `,
   styles: ``,
})
export class Loans {
   loanAnalytics: Analytics[] = [
      {
         id: 0,
         title: 'Personal Loans',
         amount: '$150,750',
         icon: '/icons/loans/personal.svg',
         iconTheme: 'bg-blue-4',
      },
      {
         id: 1,
         title: 'Corporate Loans',
         amount: '1,250',
         icon: '/icons/loans/corporate.svg',
         iconTheme: 'bg-yellow',
      },
      {
         id: 2,
         title: 'Business Loans',
         amount: '$12,750',
         icon: '/icons/loans/business.svg',
         iconTheme: 'bg-pink',
      },
      {
         id: 2,
         title: 'Custom Loans',
         amount: '$12,750',
         icon: '/icons/loans/custom.svg',
         iconTheme: 'bg-green-1',
      },
   ];
}
