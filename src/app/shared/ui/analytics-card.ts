import { Component, input } from '@angular/core';

export interface Analytics {
   id: number;
   title: string;
   amount: string;
   icon: string;
   iconTheme: string;
}

@Component({
   selector: 'app-analytics-card',
   imports: [],
   template: `
      <div class="card py-6 px-9 flex-items gap-x-7.5">
         <div
            class="flex-center h-17.5 w-17.5 rounded-full"
            [class]="analytics()?.iconTheme">
            <img [src]="analytics()?.icon" alt="" />
         </div>
         <div>
            <p class="text-blue-1">{{ analytics()?.title }}</p>
            <p class="text-black-4 font-semibold text-2xl">
               {{ analytics()?.amount }}
            </p>
         </div>
      </div>
   `,
   styles: ``,
})
export class AnalyticsCard {
   // analytics: analytics = input({})
   analytics = input.required<Analytics>();
}
