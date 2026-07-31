import { Component } from '@angular/core';
import { PageLayout } from '@core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '@shared/ui/analytics-card';

@Component({
   selector: 'app-loans',
   imports: [PageLayout, AnalyticsCard],
   template: `
      <app-page-layout title="Loans">
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 xl:grid-cols-4">
            @for (item of loanAnalytics; track item.id) {
               <app-analytics-card [analytics]="item"></app-analytics-card>
            }
         </div>

         <section>
            <h2 class="page-title my-5">Active Loans Overview</h2>
            <div class="table-container">
               <table class="w-[1000px] xl:w-full relative">
                  <thead>
                     <tr>
                        <th class="pl-5">SL No</th>
                        <th>Loan money</th>
                        <th>Left to pay</th>
                        <th>Duration</th>
                        <th>Interest rate</th>
                        <th>Installment</th>
                        <th>Repay</th>
                     </tr>
                  </thead>
                  <tbody class="w-full">
                     <tr class="table-row">
                        <td class="pl-5">01</td>
                        <td>$100,000</td>
                        <td>$40,000</td>
                        <td>8 Months</td>
                        <td>12%</td>
                        <td>$2,000 / month</td>
                        <td>
                           <button
                              class="round-outline-btn border-black-4 text-black-4 px-6">
                              Repay
                           </button>
                        </td>
                     </tr>

                     <tr class="table-row font-medium">
                        <td class="pl-5 !text-red-1">Total</td>
                        <td class="!text-red-1">$100,000</td>
                        <td class="!text-red-1">$740,000</td>
                        <td></td>
                        <td></td>
                        <td class="!text-red-1">$2,000 / month</td>
                        <td></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
      </app-page-layout>
   `,
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
