import { Component } from '@angular/core';

@Component({
   selector: 'app-card-settings',
   imports: [],
   template: `<div class="card p-4 sm:p-8">
      <div class="flex flex-col gap-y-5">
         @for (item of card_settings; track item.text) {
            <div class="flex-items gap-x-5 ">
               <div
                  class="flex-center rounded-[20px] h-15 w-15"
                  [class]="item.iconTheme">
                  <img [src]="item.icon" alt="" />
               </div>

               <div>
                  <p class="text-black-4 font-semibold">{{ item.text }}</p>
                  <p class="text-blue-1 text-sm mt-0.5">
                     {{ item.subText }}
                  </p>
               </div>
            </div>
         }
      </div>
   </div> `,
   styles: ``,
})
export class CardSettings {
   card_settings = [
      {
         icon: '/icons/card-settings/yellow-card.svg',
         iconTheme: 'bg-yellow',
         text: 'Block Card',
         subText: 'Instantly block your card',
      },
      {
         icon: '/icons/card-settings/padlock.svg',
         iconTheme: 'bg-blue-4',
         text: 'Change Pin Code',
         subText: 'Choose another pin code',
      },
      {
         icon: '/icons/card-settings/google.svg',
         iconTheme: 'bg-pink',
         text: 'Add to Google Pay',
         subText: 'Withdraw without any card',
      },
      {
         icon: '/icons/card-settings/apple-pay.png',
         iconTheme: 'bg-green-1',
         text: 'Add to Apple Pay',
         subText: 'Withdraw without any card',
      },
      {
         icon: '/icons/card-settings/apple-pay.png',
         iconTheme: 'bg-green-1',
         text: 'Add to Google Store',
         subText: 'Withdraw without any card',
      },
   ];
}
