import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
   selector: 'app-side-nav',
   imports: [RouterLink, RouterLinkActive],
   template: `
      <nav>
         <div
            class="bg-white min-h-screen fixed w-[258px] lg:w-[248px] z-[90] hidden lg:!block side-nav py-6 border-r border-grey-7"
            [class.open]="toggleNavBar()">
            <!-- <a routerLink="/" class="inline-flex mb-20 logo px-4"> BANKIFY </a> -->

            <div class="flex-items mb-20 px-4 justify-between">
               <a routerLink="/dashboard" class="inline-flex">
                  <img src="/icons/logo.svg" alt="" class="w-40 md:w-45" />
               </a>

               <button (click)="toggle()" class="lg:hidden">
                  <img src="/icons/cancel.svg" alt="" />
               </button>
            </div>

            <ul class="flex flex-col justify-between">
               <div>
                  @for (item of mainNav; track item.cta) {
                     <li class="pr-4 pb-2 relative">
                        <a
                           class="nav-link flex items-center gap-6.5 py-3 w-full px-10 font-medium text-grey-8"
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
      </nav>
   `,
   styleUrl: './side-nav.css',
})
export class SideNav {
   toggleNavBar = signal(false);

   toggle() {
      this.toggleNavBar.update(prev => !prev);
   }

   mainNav = [
      { cta: 'Dashboard', icon: 'dashboard.svg', link: '/dashboard' },
      { cta: 'Transactions', icon: 'transaction.svg', link: '/transactions' },
      { cta: 'Accounts', icon: 'accounts.svg', link: '/accounts' },
      { cta: 'Investments', icon: 'investment.svg', link: '/investments' },
      { cta: 'Cards', icon: 'credit-cards.svg', link: '/cards' },
      { cta: 'Loans', icon: 'loans.svg', link: '/loans' },
      { cta: 'Services', icon: 'services.svg', link: '/services' },
      { cta: 'Settings', icon: 'settings.svg', link: '/settings' },
   ];
}
