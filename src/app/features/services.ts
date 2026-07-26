import { Component } from '@angular/core';
import { PageLayout } from '../core/layouts/page-layout/page-layout';
import { AnalyticsCard, Analytics } from '../shared/ui/analytics-card';

@Component({
   selector: 'app-services',
   imports: [PageLayout, AnalyticsCard],
   template: `
      <app-page-layout>
         <div class="flex flex-col gap-7.5 sm:grid grid-cols-2 lg:grid-cols-3">
            @for (item of loanAnalytics; track item.id) {
               <app-analytics-card
                  [analytics]="item"
                  [isService]="true"></app-analytics-card>
            }
         </div>

         <section>
            <h2 class="page-title mt-5">Bank Services List</h2>

            <div class="table-wrapper">
               <table class="w-[700px] xl:w-full relative -mt-2.5">
                  <thead class="sr-only">
                     <tr>
                        <th class="pl-5"></th>
                        <th>Card type</th>
                        <th>Bank</th>
                        <th>Card Number</th>
                        <th>Card Name</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody class="w-full">
                     <tr class="table-row bg-white">
                        <td class="pl-5 py-2">
                           <span
                              class="flex-center rounded-[20px] h-15 w-15 bg-blue-4">
                              <img
                                 src="/icons/cards/blue-credit-card.svg"
                                 alt="" />
                           </span>
                        </td>
                        <td>
                           <p class="text-black-4 font-semibold">
                              Business Loans
                           </p>
                           <p class="text-blue-1 text-[15px] mt-0.5">
                              It is a long established
                           </p>
                        </td>
                        <td>
                           <p class="text-black-4 font-semibold">Lorem Ipsum</p>
                           <p class="text-blue-1 text-[15px] mt-0.5">
                              It is a long established
                           </p>
                        </td>
                        <td>
                           <p class="text-black-4 font-semibold">Lorem Ipsum</p>
                           <p class="text-blue-1 text-[15px] mt-0.5">
                              It is a long established
                           </p>
                        </td>
                        <td>
                           <p class="text-black-4 font-semibold">Lorem Ipsum</p>
                           <p class="text-blue-1 text-[15px] mt-0.5">
                              It is a long established
                           </p>
                        </td>

                        <td>
                           <button
                              class="round-outline-btn border-blue-1 text-blue-1 px-6 font-medium">
                              View details
                           </button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </section>
      </app-page-layout>
   `,
   styles: ``,
})
export class Services {
   loanAnalytics: Analytics[] = [
      {
         id: 0,
         title: 'Unlimited promotion',
         amount: 'Life insurance',
         icon: '/icons/services/insurance.svg',
         iconTheme: 'bg-blue-4',
      },
      {
         id: 1,
         title: 'Shopping',
         amount: 'Buy. Think. Grow',
         icon: '/icons/services/shopping.svg',
         iconTheme: 'bg-yellow',
      },
      {
         id: 2,
         title: 'Safety',
         amount: 'We are your alies',
         icon: '/icons/services/safety.svg',
         iconTheme: 'bg-green-1',
      },
   ];
}
