import { Component, signal, inject } from '@angular/core';
import { PageLayout } from '@core/layouts/page-layout/page-layout';
import { CardDetails } from '@shared/ui/card-details';
import { Expenses } from './components/expenses';
import { RecentTransactionTable } from './components/recent-transaction-table';
import { Modal } from '@shared/ui/modal';
import { ModalService } from '@shared/services/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCard } from './components/add-card';

@Component({
   selector: 'app-transactions',
   imports: [
      PageLayout,
      CardDetails,
      Expenses,
      RecentTransactionTable,
      Modal,
      NgxPaginationModule,
      AddCard,
   ],
   template: `
      <app-page-layout title="Transactions">
         <div class="flex flex-col xl:grid grid-cols-[65%_auto] gap-8">
            <div>
               <div class="flex-between mb-5 font-semibold text-black-3">
                  <h2 class="page-title">My Cards</h2>
                  <button class="" (click)="modal.open()">Add Card</button>
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
            <!-- <pagination-controls
               (pageChange)="p = $event"></pagination-controls> -->
         </section>

         @if (modal.isOpen()) {
            <app-modal
               title="Add Card"
               subText="Enter the details of your card"
               customClass="w-full sm:max-w-[450px]"
               (closeModal)="modal.close()">
               <app-add-card
                  (addCardSuccessEvent)="modal.close()"></app-add-card>
            </app-modal>
         }
      </app-page-layout>
   `,
})
export class Transactions {
   showAddCardModal = signal<boolean>(false);
   modal = inject(ModalService);

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

   p: number = 1;
   collection: any[] = ['Hello', 'World'];
}
