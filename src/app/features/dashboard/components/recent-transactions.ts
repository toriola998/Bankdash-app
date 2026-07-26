import { Component } from '@angular/core';

type TransactionVariant = 'credit' | 'debit';
type ProviderType = 'paypal' | 'card' | 'user';

interface Transaction {
   id: number;
   providerName: ProviderType;
   description: string;
   trnxType: TransactionVariant;
   amount: string;
   date: string;
}

@Component({
   selector: 'app-recent-transactions',
   template: `
      <h2 class="page-title mb-5">Recent Transactions</h2>

      <div class="card p-6">
         <ul class="flex flex-col gap-y-4">
            @for (item of trnxData; track item.id) {
               <li class="flex-between">
                  <div class="flex-items gap-x-4">
                     <div
                        class="w-14 h-14 rounded-full flex-center"
                        [class]="typeConfig[item.providerName].bgClass">
                        <img
                           [src]="typeConfig[item.providerName].icon"
                           alt="" />
                     </div>

                     <div>
                        <p class="font-medium">{{ item.description }}</p>
                        <p class="text-[15px] text-blue-1 mt-2">
                           {{ item.date }}
                        </p>
                     </div>
                  </div>

                  <span
                     class="font-medium"
                     [class]="
                        item.trnxType === 'credit' ? 'text-green' : 'text-red'
                     "
                     >{{ item.amount }}</span
                  >
               </li>
            }
         </ul>
      </div>
   `,

   styles: ``,
})
export class RecentTransactions {
   trnxData: Transaction[] = [
      {
         id: 0,
         providerName: 'paypal',
         description: 'Deposit from my Card',
         trnxType: 'debit',
         amount: '-$850',
         date: '28 January 2021',
      },
      {
         id: 1,
         providerName: 'card',
         description: 'Deposit Paypal',
         trnxType: 'credit',
         amount: '+$2,850',
         date: '17 March 2024',
      },
      {
         id: 3,
         providerName: 'user',
         description: 'Lamine Yamal',
         trnxType: 'credit',
         amount: '+$2,850',
         date: '17 March 2024',
      },
   ];

   readonly typeConfig = {
      paypal: { bgClass: 'bg-blue-4', icon: '/icons/trnx/paypal.svg' },
      card: { bgClass: 'bg-yellow', icon: '/icons/trnx/card.svg' },
      user: { bgClass: 'bg-green-1', icon: '/icons/trnx/transfer.svg' },
   } as const;
}
