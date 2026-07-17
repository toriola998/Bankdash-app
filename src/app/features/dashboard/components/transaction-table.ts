import { Component } from '@angular/core';

@Component({
   selector: 'app-transaction-table',
   imports: [],
   template: `<div class="table-container">
      <table class="w-[1000px] xl:w-full relative">
         <thead>
            <tr>
               <th class="w-20 px-4"></th>
               <th>Name</th>
               <th>Amount</th>
               <th>Description</th>
               <th>Date</th>
               <!-- <th>Transaction Type</th> -->
            </tr>
         </thead>
         <tbody class="w-full">
            <tr class="table-row">
               <td class="px-4">1</td>
               <td>TRANSFER to Faidat</td>
               <td>N5,000,0.00</td>
               <td>TRANSFER to Faidat</td>
               <td>23,Nov 2026 | 11:06AM</td>
            </tr>
            <tr class="table-row">
               <td class="px-4">2</td>
               <td>TRANSFER to Faidat</td>
               <td>N5,000,0.00</td>
               <td>TRANSFER to Faidat</td>
               <td>23,Nov 2026 | 11:06AM</td>
            </tr>
         </tbody>
      </table>
   </div> `,
   styles: ``,
})
export class TransactionTable {}
