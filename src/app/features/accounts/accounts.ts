import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';

interface analytics {
   id: number;
   title: string;
   amount: string;
   icon: string;
   icontheme: string;
}
@Component({
   selector: 'app-accounts',
   imports: [PageLayout],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 lg:grid-cols-4">
            @for (item of accountanalytics; track item.id) {
               <div class="card py-6 px-9 flex-items gap-x-7.5">
                  <div
                     class="flex-center h-17.5 w-17.5 rounded-full"
                     [class]="item.icontheme">
                     <img [src]="item.icon" alt="" />
                  </div>
                  <div>
                     <p class="text-blue-1">{{ item.title }}</p>
                     <p class="text-black-4 font-semibold text-2xl">
                        {{ item.amount }}
                     </p>
                  </div>
               </div>
            }
         </div>
      </app-page-layout>
   `,
   styles: ``,
})
export class Accounts {
   accountanalytics: analytics[] = [
      {
         id: 0,
         title: 'My Balance',
         amount: '$12,750',
         icon: '/icons/accounts-analytics/money-tag.svg',
         icontheme: 'bg-yellow',
      },
      {
         id: 1,
         title: 'Income',
         amount: '$12,750',
         icon: '/icons/accounts-analytics/income.svg',
         icontheme: 'bg-blue-4',
      },
      {
         id: 2,
         title: 'Expense',
         amount: '$12,750',
         icon: '/icons/accounts-analytics/expense.svg',
         icontheme: 'bg-pink',
      },
      {
         id: 3,
         title: 'Total Savings',
         amount: '$12,750',
         icon: '/icons/accounts-analytics/saving.svg',
         icontheme: 'bg-green-1',
      },
   ];
}
