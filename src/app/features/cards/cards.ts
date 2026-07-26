import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/ui/card-details';
import { CardsList } from './components/cards-list';
import { AddCard } from '../transactions/components/add-card';
import { CardSettings } from './components/card-settings';
import { CardsExpenseStatistics } from './components/cards-expense-statistics';

@Component({
   selector: 'app-cards',
   imports: [
      PageLayout,
      CardDetails,
      CardsList,
      AddCard,
      CardSettings,
      CardsExpenseStatistics,
   ],
   template: `
      <app-page-layout>
         <div>
            <h2 class="page-title mb-5">My Cards</h2>

            <div class="flex flex-col md:grid xl:grid-cols-3 gap-8">
               <app-card-details
                  variant="light-blue"
                  [cardDetails]="cardDetails"></app-card-details>
               <app-card-details
                  variant="blue"
                  [cardDetails]="cardDetails2"></app-card-details>
               <app-card-details
                  variant="light"
                  [cardDetails]="cardDetails3"></app-card-details>
            </div>
         </div>

         <div class="my-5 flex flex-col xl:grid grid-cols-[auto_65%] gap-5">
            <section>
               <h2 class="page-title mb-5">Card expense statistics</h2>

               <app-cards-expense-statistics></app-cards-expense-statistics>
            </section>
            <section>
               <h2 class="page-title">Card List</h2>

               <app-cards-list></app-cards-list>
            </section>
         </div>

         <div class="flex flex-col xl:grid grid-cols-[60%_auto] gap-5">
            <section>
               <h2 class="page-title mb-5">Add New Card</h2>
               <div class="card p-4 sm:p-8">
                  <p class="text-blue-1 text-sm md:text-base mb-7">
                     Credit Card generally means a plastic card issued by
                     Scheduled Commercial Banks assigned to a Cardholder, with a
                     credit limit, that can be used to purchase goods and
                     services on credit or obtain cash advances.
                  </p>
                  <app-add-card
                     [isSmallBtn]="true"
                     [isGrid]="true"></app-add-card>
               </div>
            </section>

            <section>
               <h2 class="page-title mb-5">Card Settings</h2>
               <app-card-settings></app-card-settings>
            </section>
         </div>
      </app-page-layout>
   `,
})
export class Cards {
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
      cardUrl: '/icons/chip-card.svg',
      masterCardUrl: '/icons/mastercard-white.svg',
   };
   cardDetails3 = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card-grey.svg',
      masterCardUrl: '/icons/mastercard-grey.svg',
   };
}
