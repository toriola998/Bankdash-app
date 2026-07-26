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
      <div class="card py-6 px-9 flex-items gap-x-4">
         <div
            class="flex-center h-17.5 w-17.5 rounded-full"
            [class]="analytics()?.iconTheme">
            <img [src]="analytics()?.icon" alt="" />
         </div>
         <div>
            @if (!isService()) {
               <p class="text-blue-1">{{ analytics()?.title }}</p>
            }
            <p class="text-black-4 font-semibold text-2xl">
               {{ analytics()?.amount }}
            </p>
            @if (isService()) {
               <p class="text-blue-1">{{ analytics()?.title }}</p>
            }
         </div>
      </div>
   `,
   styles: `
      .hide-title {
         display: none;
      }
   `,
})
export class AnalyticsCard {
   // analytics: analytics = input({})
   analytics = input.required<Analytics>();
   isService = input<boolean>(false);
}
