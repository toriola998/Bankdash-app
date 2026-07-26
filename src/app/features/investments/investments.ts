import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '../../shared/ui/analytics-card';
import { YearlyInvestment } from './components/yearly-investment';
import { MonthlyRevenue } from './components/monthly-revenue';
import { InvestmentList } from './components/investment-list';
import { TrendingStock } from './components/trending-stock';

@Component({
   selector: 'app-investments',
   imports: [
      PageLayout,
      AnalyticsCard,
      YearlyInvestment,
      MonthlyRevenue,
      InvestmentList,
      TrendingStock,
   ],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 lg:grid-cols-3">
            @for (item of accountanalytics; track item.id) {
               <app-analytics-card [analytics]="item"></app-analytics-card>
            }
         </div>

         <div class="my-5 flex flex-col gap-7.5 lg:grid grid-cols-2">
            <section>
               <h2 class="page-title mb-5">Yearly Total Investment</h2>
               <app-yearly-investment></app-yearly-investment>
            </section>
            <section>
               <h2 class="page-title mb-5">Monthly Revenue</h2>

               <app-monthly-revenue></app-monthly-revenue>
            </section>
         </div>

         <div class="flex flex-col gap-7.5 lg:grid grid-cols-[60%_auto]">
            <section>
               <h2 class="page-title">My Investment</h2>
               <app-investment-list></app-investment-list>
            </section>

            <section>
               <h2 class="page-title mb-5">Trending Stock</h2>
               <app-trending-stock></app-trending-stock>
            </section>
         </div>
      </app-page-layout>
   `,
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
