import { Component } from '@angular/core';
import { TransactionTable } from './components/transaction-table';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/card-details';

@Component({
   selector: 'app-dashboard',
   imports: [TransactionTable, PageLayout, CardDetails],
   template: ` <app-page-layout>
      <div class="flex-between mb-5 font-semibold text-black-3">
         <h2 class=" text-xl md:text-2xl ">My Cards</h2>
         <a href="" class="">See All</a>
      </div>

      <div class="flex flex-col md:grid grid-cols-2 gap-8">
         <app-card-details
            variant="blue"
            [cardDetails]="cardDetails"></app-card-details>

         <app-card-details
            variant="light"
            [cardDetails]="cardDetails2"></app-card-details>
      </div>

      <section>
         <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-5">
            Transaction History
         </h2>

         <app-transaction-table></app-transaction-table>
      </section>
   </app-page-layout>`,
   styles: `
      ::ng-deep .blue-card {
         background: linear-gradient(107.38deg, #4c49ed 2.61%, #0a06f4 101.2%);
      }
   `,
})
export default class Dashboard {
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
