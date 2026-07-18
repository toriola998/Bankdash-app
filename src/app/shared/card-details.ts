import { Component, computed, input } from '@angular/core';

interface Card {
   balance: string;
   name: string;
   date: string;
   cardUrl: string;
   masterCardUrl: string;
}

type CardVariant = 'blue' | 'light';

@Component({
   selector: 'app-card-details',
   standalone: true,
   template: `
      <article class="rounded-3xl overflow-hidden" [class]="theme().article">
         <div class="flex-between px-6 pt-6">
            <div>
               <p class="text-xs" [class]="theme().label">Balance</p>
               <p class="text-xl font-semibold">{{ cardDetails().balance }}</p>
            </div>

            <img [src]="cardDetails().cardUrl" />
         </div>

         <div class="flex-items gap-x-10 py-9 px-6">
            <div>
               <p class="text-xs uppercase" [class]="theme().label">
                  Card Holder
               </p>
               <p class="font-semibold">{{ cardDetails().name }}</p>
            </div>

            <div>
               <p class="text-xs uppercase" [class]="theme().label">
                  Valid Thru
               </p>
               <p class="font-semibold">{{ cardDetails().date }}</p>
            </div>
         </div>

         <div class="flex-between px-6 py-5" [class]="theme().bottom">
            <p class="font-semibold text-2xl">3778 **** **** 1234</p>

            <img [src]="cardDetails().masterCardUrl" />
         </div>
      </article>
   `,
   styles: [
      `
         .bottom-blue {
            background: linear-gradient(
               180deg,
               rgba(255, 255, 255, 0.15) 0%,
               rgba(255, 255, 255, 0) 100%
            );
         }

         .bottom-light {
            border-top: 1px solid #e5e7eb;
         }
      `,
   ],
})
export class CardDetails {
   cardDetails = input.required<Card>();

   variant = input<CardVariant>('blue');

   theme = computed(() => {
      if (this.variant() === 'blue') {
         return {
            article: 'bg-gradient-to-r from-indigo-600 to-blue-700 text-white',
            label: 'text-white',
            bottom: 'bottom-blue',
         };
      }

      return {
         article: 'bg-white border border-gray-200 text-black-3',
         label: 'text-blue-1',
         bottom: 'bottom-light',
      };
   });
}
