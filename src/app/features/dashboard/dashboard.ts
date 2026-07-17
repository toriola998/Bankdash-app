import { Component } from '@angular/core';
import { TransactionTable } from './components/transaction-table';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';

@Component({
   selector: 'app-dashboard',
   imports: [TransactionTable, PageLayout],
   template: ` <app-page-layout>
      <h1 class="text-2xl md:text-3xl font-semibold">Welcome Faidat</h1>
      <p class="mt-2 text-sm text-gray-700">
         Check all your activity with the quick online banking
      </p>

      <div class="mt-5 flex flex-col gap-5 lg:grid grid-cols-[70%_auto]">
         <div
            class="card p-8 flex flex-col gap-8 500:flex-row sm:items-center justify-between">
            <div>
               <p class="text-sm text-gray-700 font-medium">Current Balance</p>
               <p class="font-semibold text-4xl mt-2">$57,879.89</p>
            </div>

            <button class="btn blue-2 !rounded-full px-16 w-fit">
               View details
            </button>
         </div>

         <div class="card p-8">
            <p class="text-sm text-gray-700 font-medium">Account Type</p>
            <p class="font-semibold text-4xl mt-2">Savings</p>
         </div>
      </div>

      <section>
         <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-5">
            Transaction History
         </h2>

         <app-transaction-table></app-transaction-table>
      </section>
   </app-page-layout>`,
   styles: ``,
})
export default class Dashboard {}
