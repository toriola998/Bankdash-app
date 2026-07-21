import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { CardDetails } from '../../shared/ui/card-details';
import { RecentTransactions } from './components/recent-transactions';
import { WeeklyActivities } from './components/weekly-activities';
import { ExpenseStatistics } from './components/expense-statistics';
import { BalanceHistory } from './components/balance-history';
import { QuickTransfer } from './components/quick-transfer/quick-transfer';

@Component({
   selector: 'app-dashboard',
   imports: [
      PageLayout,
      CardDetails,
      RecentTransactions,
      WeeklyActivities,
      ExpenseStatistics,
      BalanceHistory,
      QuickTransfer,
   ],
   template: ` <app-page-layout>
      <div class="flex flex-col xl:grid grid-cols-[65%_auto] gap-8">
         <div>
            <div class="flex-between mb-5 font-semibold text-black-3">
               <h2 class="page-title">My Cards</h2>
               <a href="" class="">See All</a>
            </div>

            <div class="flex flex-col md:grid grid-cols-2 gap-8">
               <app-card-details
                  variant="blue"
                  [cardDetails]="cardDetails"></app-card-details>

               <app-card-details
                  variant="light"
                  [cardDetails]="cardDetails2"></app-card-details>
            </div>
         </div>
         <app-recent-transactions></app-recent-transactions>
      </div>

      <div class="flex flex-col xl:grid grid-cols-[65%_auto] gap-8">
         <section>
            <h2 class="page-title my-5">Weekly Activity</h2>
            <app-weekly-activities></app-weekly-activities>
         </section>

         <section>
            <h2 class="page-title my-5">Expense statistics</h2>
            <app-expense-statistics></app-expense-statistics>
         </section>
      </div>

      <div class="flex flex-col xl:grid grid-cols-[auto_60%] gap-8">
         <section>
            <h2 class="page-title my-5">Quick Transfer</h2>
            <app-quick-transfer></app-quick-transfer>
         </section>
         <section>
            <h2 class="page-title my-5">Balance History</h2>
            <app-balance-history></app-balance-history>
         </section>
      </div>
   </app-page-layout>`,
   styles: `
      ::ng-deep .blue-card {
         background: linear-gradient(107.38deg, #4c49ed 2.61%, #0a06f4 101.2%);
      }
   `,
})
export default class Dashboard {
   cardDetails = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card.svg',
      masterCardUrl: '/icons/mastercard-white.svg',
   };

   cardDetails2 = {
      date: '12/22',
      name: 'Hola',
      balance: '$12.00',
      cardUrl: '/icons/chip-card-grey.svg',
      masterCardUrl: '/icons/mastercard-grey.svg',
   };
}
