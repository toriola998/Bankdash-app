import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/ui/card-details';

@Component({
   selector: 'app-cards',
   imports: [PageLayout, CardDetails],
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
      </app-page-layout>
   `,
   styles: ``,
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
