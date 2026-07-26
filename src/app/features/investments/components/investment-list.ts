import { Component } from '@angular/core';

@Component({
   selector: 'app-investment-list',
   template: `
      <div class="table-wrapper">
         <table class="w-[700px] xl:w-full relative -mt-2.5">
            <thead class="sr-only">
               <tr>
                  <th class="pl-5"></th>
                  <th>Company Name</th>
                  <th>Investment Value</th>
                  <th>Return value</th>
               </tr>
            </thead>
            <tbody class="w-full">
               <tr class="table-row bg-white ">
                  <td class="pl-5">
                     <span class="flex-center rounded-[20px] h-17.5 w-17.5">
                        <img src="" alt="" />
                     </span>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Apple Store</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        Ecommerce, marketplace
                     </p>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">$54,000</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        Investment value
                     </p>
                  </td>
                  <td>
                     <p class="font-semibold text-green">$54,000</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">Return value</p>
                  </td>

                  <!-- /* [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     " */ -->
               </tr>
               <tr class="table-row bg-white ">
                  <td class="pl-5">
                     <span class="flex-center rounded-[20px] h-17.5 w-17.5">
                        <img src="" alt="" />
                     </span>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">Apple Store</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        Ecommerce, marketplace
                     </p>
                  </td>
                  <td>
                     <p class="text-black-4 font-semibold">$54,000</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">
                        Investment value
                     </p>
                  </td>
                  <td>
                     <p class="font-semibold text-green">$54,000</p>
                     <p class="text-blue-1 text-[15px] mt-0.5">Return value</p>
                  </td>

                  <!-- /* [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     " */ -->
               </tr>
            </tbody>
         </table>
      </div>
   `,
   styles: `
      td:first-child {
         border-radius: 20px 0 0 20px;
      }

      td:last-child {
         border-radius: 0px 20px 20px 0;
      }

      table {
         border-collapse: separate;
         border-spacing: 0 15px;
      }
   `,
})
export class InvestmentList {}
