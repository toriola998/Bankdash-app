import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/ui/card-details';
import { LastTransaction } from './components/last-transaction';
import { DebitCreditOverview } from './components/debit-credit-overview';
import { InvoiceSent } from './components/invoices-sent';

interface analytics {
   id: number;
   title: string;
   amount: string;
   icon: string;
   icontheme: string;
}
@Component({
   selector: 'app-accounts',
   imports: [
      PageLayout,
      CardDetails,
      LastTransaction,
      DebitCreditOverview,
      InvoiceSent,
   ],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 xl:grid-cols-4">
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

         <div
            class="md:grid grid-cols-[50%_auto] xl:grid-cols-[65%_auto] mt-5 gap-7.5">
            <section>
               <h2 class="page-title mb-5">Last Transaction</h2>

               <div class="card">
                  <app-last-transaction></app-last-transaction>
               </div>
            </section>

            <section>
               <div class="flex-between mb-5 mt-5 lg:mt-0">
                  <h2 class="page-title">My Cards</h2>
                  <a class="font-semibold text-lg">See all</a>
               </div>

               <app-card-details
                  variant="blue"
                  [cardDetails]="cardDetails"></app-card-details>
            </section>
         </div>

         <div
            class="md:grid grid-cols-[50%_auto] xl:grid-cols-[65%_auto] mt-5 gap-7.5">
            <section>
               <h2 class="page-title mb-5">Debit & Credit Overview</h2>

               <app-debit-credit-overview></app-debit-credit-overview>
            </section>

            <section>
               <h2 class="page-title mb-5">Invoices sent</h2>

               <app-invoices-sent></app-invoices-sent>
            </section>
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

   cardDetails = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card.svg',
      masterCardUrl: '/icons/mastercard-white.svg',
   };
}
