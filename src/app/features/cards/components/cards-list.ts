import { Component } from '@angular/core';

@Component({
   selector: 'app-cards-list',
   template: `
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
                        <img src="/icons/cards/blue-credit-card.svg" alt="" />
                     </span>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Card Type</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">Secondary</p>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Bank</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">DBL Bank</p>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Card Number</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        **** **** 5600
                     </p>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Name on card</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        Michel Johnson
                     </p>
                  </td>
                  <td>
                     <button class="text-blue-5">View details</button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   `,
})
export class CardsList {}
