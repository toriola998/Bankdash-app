import { Component } from '@angular/core';

@Component({
   selector: 'app-recent-transaction-table',
   imports: [],
   template: `<div class="table-container">
      <table class="w-[1000px] xl:w-full relative">
         <thead>
            <tr>
               <th class="pl-5">Description</th>
               <th>Transaction ID</th>
               <th>Type</th>
               <th>Card</th>
               <th>Date</th>
               <th>Amount</th>
               <th>Receipt</th>
            </tr>
         </thead>
         <tbody class="w-full">
            <tr class="table-row">
               <td class="pl-5">
                  <span class="flex-items gap-x-2.5">
                     <img src="/images/arrow-up-circle.svg" alt="" />
                     Spotify Subscription
                  </span>
               </td>
               <td>#12345678</td>
               <td>Shopping</td>
               <td>1234 ****</td>
               <td>28 Jan, 12.30 AM</td>
               <!-- /* [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     " */ -->
               <td class="pr-8 text-green">-$2350</td>
               <td>
                  <button
                     class="border-2 border-dark-blue text-dark-blue rounded-full py-2 px-4">
                     Download
                  </button>
               </td>
            </tr>
         </tbody>
      </table>
   </div> `,
   styles: ``,
})
export class RecentTransactionTable {}
