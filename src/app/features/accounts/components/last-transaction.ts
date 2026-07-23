import { Component } from '@angular/core';

@Component({
   selector: 'app-last-transaction',
   imports: [],
   template: `<div class=" table-wrapper">
      <table class="w-[700px] xl:w-full relative">
         <thead class="sr-only">
            <tr>
               <th class="pl-5"></th>
               <th>Description</th>
               <th>Type</th>
               <th>Card</th>
               <th>Status</th>
               <th>Amount</th>
            </tr>
         </thead>
         <tbody class="w-full">
            <tr class="table-row">
               <td class="pl-5">
                  <span class="flex-center rounded-[20px] h-17.5 w-17.5">
                     <img src="" alt="" />
                  </span>
               </td>
               <td>
                  <p class="text-black-4 font-semibold">Spotify Subscription</p>
                  <p class="text-blue-1 text-[15px]">25 Jan 2021</p>
               </td>
               <td class="text-blue-1">Shopping</td>
               <td class="text-blue-1">1234 ****</td>

               <!-- /* [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     " */ -->
               <td class="pr-8 text-green">-$2350</td>
            </tr>
         </tbody>
      </table>
   </div>`,
   styles: ``,
})
export class LastTransaction {}
