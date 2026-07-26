import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-side-nav',
   imports: [RouterLink, RouterLinkActive],
   template: `
      <nav>
         <div
            class="bg-white min-h-screen fixed w-[248px] z-[90] hidden lg:!block side-nav py-6 "
            [class.open]="toggleNavBar()">
            <a routerLink="/" class="inline-flex mb-20 logo px-4"> BANKIFY </a>

            <ul class="flex flex-col justify-between">
               <div>
                  @for (item of mainNav; track item.cta) {
                     <li class="pr-4 pb-2 relative">
                        <a
                           class="nav-link flex items-center gap-6.5 py-2.5 w-full px-10 font-medium text-grey-8"
                           [routerLink]="item.link"
                           routerLinkActive="active-link"
                           [routerLinkActiveOptions]="{ exact: true }">
                           <!--  span used in place of <img> to get dynamic mask icon -->
                           <span
                              class="nav-icon"
                              [style.mask-image]="
                                 'url(/icons/nav-bar/' + item.icon + ')'
                              "
                              [style.-webkit-mask-image]="
                                 'url(/icons/nav-bar/' + item.icon + ')'
                              ">
                           </span>

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
   styleUrl: './side-nav.css',
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
         icon: 'transaction.svg',
         link: '/transactions',
      },
      {
         cta: 'Accounts',
         icon: 'accounts.svg',
         link: '/accounts',
      },
      {
         cta: 'Investments',
         icon: 'investment.svg',
         link: '/investments',
      },
      {
         cta: 'Cards',
         icon: 'credit-cards.svg',
         link: '/cards',
      },
      {
         cta: 'Loans',
         icon: 'loans.svg',
         link: '/loans',
      },
      {
         cta: 'Services',
         icon: 'services.svg',
         link: '/services',
      },
   ];
}
