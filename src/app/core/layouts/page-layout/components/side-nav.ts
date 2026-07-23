import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-side-nav',
   imports: [RouterLink, RouterLinkActive],
   template: `
      <nav>
         <div
            class="bg-white min-h-screen fixed w-[248px] z-[90] hidden lg:!block side-nav px-4 py-6 "
            [class.open]="toggleNavBar()">
            <a routerLink="/" class="inline-flex mb-20 logo"> BANKIFY </a>

            <ul class="flex flex-col justify-between">
               <div>
                  @for (item of mainNav; track item.cta) {
                     <li class="pr-4 pb-2">
                        <a
                           class="flex gap-4 py-2.5 w-full px-1"
                           [routerLink]="item.link"
                           routerLinkActive="active-link"
                           [routerLinkActiveOptions]="{ exact: true }">
                           <img
                              [src]="'/assets/icons/nav-bar/' + item.icon"
                              alt="" />
                           {{ item.cta }}
                        </a>
                     </li>
                  }
               </div>
            </ul>
         </div>

         <!-- Mobile Top Bar -->
         <div class="p-6 flex-between lg:hidden top-0 z-50 w-full">
            <a routerLink="/" class="lg:hidden logo"> BANKIFY </a>

            <div class="flex gap-2">
               <button (click)="handleToggle()" class="lg:hidden">menu</button>

               <ng-content></ng-content>
            </div>
         </div>
      </nav>
   `,
   styles: `
      .side-nav.open {
         display: block;
      }
   `,
})
export class SideNav {
   toggleNavBar = signal(false);

   handleToggle() {
      if (this.toggleNavBar()) {
         this.toggleNavBar.set(false);
      } else {
         this.toggleNavBar.set(true);
      }
   }

   mainNav = [
      {
         cta: 'Dashboard',
         icon: 'dashboard.svg',
         link: '/dashboard',
      },
      {
         cta: 'Transactions',
         icon: 'account.svg',
         link: '/transactions',
      },
      {
         cta: 'Accounts',
         icon: 'calculator.svg',
         link: '/accounts',
      },
   ];
}
