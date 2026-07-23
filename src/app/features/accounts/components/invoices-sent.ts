import { Component } from '@angular/core';

@Component({
   selector: 'app-invoices-sent',
   imports: [],
   template: `<div class="card px-6 py-7.5">
      <div class="flex-between">
         <div class="flex-items gap-x-5">
            <div class="flex-center"></div>

            <div>
               <p class="font-medium text-grey-8">Apple Store</p>
               <p class="text-blue-1 text-[15px]">5h ago</p>
            </div>
         </div>

         <p class="text-blue-1">$450</p>
      </div>
   </div> `,
   styles: ``,
})
export class InvoiceSent {}
