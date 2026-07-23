import { Component } from '@angular/core';

@Component({
   selector: 'app-trending-stock',
   imports: [],
   template: `<div class="table-container">
      <table class="w-[1000px] xl:w-full relative">
         <thead>
            <tr>
               <th class="pl-5">SL No</th>
               <th>Name</th>
               <th>Price</th>
               <th>Return</th>
            </tr>
         </thead>
         <tbody class="w-full">
            <tr class="table-row">
               <td class="pl-5">01</td>
               <td>Trivago</td>
               <td>$150</td>
               <td class="pr-8 text-green">-$2350</td>

               <!-- /* [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     " */ -->
            </tr>
         </tbody>
      </table>
   </div> `,
   styles: ``,
})
export class TrendingStock {}
