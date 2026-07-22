import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/ui/card-details';
import { Expenses } from './components/expenses';
import { RecentTransactionTable } from './components/recent-transaction-table';

@Component({
   selector: 'app-transactions',
   imports: [PageLayout, CardDetails, Expenses, RecentTransactionTable],
   template: `
      <app-page-layout>
         <div class="flex flex-col xl:grid grid-cols-[65%_auto] gap-8">
            <div>
               <div class="flex-between mb-5 font-semibold text-black-3">
                  <h2 class="page-title">My Cards</h2>
                  <button href="" class="">Add Card</button>
               </div>

               <div class="flex flex-col md:grid grid-cols-2 gap-8">
                  <app-card-details
                     variant="blue"
                     [cardDetails]="cardDetails"></app-card-details>

                  <app-card-details
                     variant="light"
                     [cardDetails]="cardDetails2"></app-card-details>
               </div>
            </div>

            <section>
               <h2 class="page-title mb-5">My Expenses</h2>
               <app-expenses></app-expenses>
            </section>
         </div>

         <section>
            <h2 class="page-title my-5">Recent Transactions</h2>

            <app-recent-transaction-table></app-recent-transaction-table>
         </section>
      </app-page-layout>
   `,
   styles: ``,
})
export class Transactions {
   cardDetails = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card.svg',
      masterCardUrl: '/icons/mastercard-white.svg',
   };

   cardDetails2 = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card-grey.svg',
      masterCardUrl: '/icons/mastercard-grey.svg',
   };
}
