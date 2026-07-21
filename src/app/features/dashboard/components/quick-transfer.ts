import { Component } from '@angular/core';

interface Beneficiary {
   id: number;
   name: string;
   role: string;
   image: string;
}

@Component({
   selector: 'app-quick-transfer',
   imports: [],
   standalone: true,
   template: `
      <div class="card p-4 sm:p-8">
         <div class="flex-items gap-x-8">
            <ul class="flex gap-x-7">
               @for (item of beneficiaryList; track item.id) {
                  <li>
                     <img
                        [src]="item.image"
                        alt=""
                        class="rounded-full h-18 w-18 mx-auto block" />
                     <p class="text-center  mt-4 mb-2">{{ item.name }}</p>
                     <p class="text-blue-1 text-center text-[15px]">
                        {{ item.role }}
                     </p>
                  </li>
               }
            </ul>
            <div class=" flex-center h-12 w-12 rounded-full more">
               <img src="/icons/chevron-grey-right.svg" alt="" />
            </div>
         </div>

         <div class="flex-items mt-7">
            <label class="!text-blue-1 sm:w-36" for="amount"
               >Write amount</label
            >

            <div class="relative flex-items h-12.5 pr-0.5 w-full">
               <input
                  id="amount"
                  type="text"
                  formControlName="amount"
                  placeholder="525.00"
                  class="!border-0 bg-grey-6 !rounded-full w-full" />

               <button
                  class="btn blue !rounded-full h-12.5 px-6 flex-items gap-x-3 absolute right-0">
                  Send
                  <img src="/icons/send.svg" alt="" />
               </button>
            </div>
         </div>
      </div>
   `,
   styles: `
      .more {
         box-shadow: 4px 4px 18px -2px #e7e4e8cc;
      }
   `,
})
export class QuickTransfer {
   beneficiaryList: Beneficiary[] = [
      {
         id: 0,
         name: 'Livia Bator',
         role: 'CEO',
         image: '/images/users/livia.svg',
      },
      {
         id: 1,
         name: 'Randy Press',
         role: 'Director',
         image: '/images/users/randy-press.svg',
      },
      {
         id: 2,
         name: 'Workman',
         role: 'Designer',
         image: '/images/users/workman.svg',
      },
   ];
}
