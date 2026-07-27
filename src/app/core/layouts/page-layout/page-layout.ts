import { Component } from '@angular/core';
import { input } from '@angular/core';
import { SideNav } from './components/side-nav/side-nav';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-page-layout',
   imports: [SideNav, RouterLink],
   template: ` <div class="lg:grid page-layout">
      <app-side-nav> </app-side-nav>

      <main class="w-full min-h-screen overflow-auto bg-grey-5">
         <!-- Desktop title and user info -->
         <div
            class="w-full hidden lg:block bg-white border-r border-grey-7 h-22">
            <div
               class="max-w-[1500px] 2xl:mx-auto lg:flex items-center h-22 justify-between px-10 ">
               <h1 class="page-title">{{ title() }}</h1>

               <div class="flex-items gap-x-5">
                  <a
                     routerLink="/settings"
                     class="flex-center h-10 w-10 bg-grey-5 rounded-full">
                     <img src="/icons/settings.svg" alt="" />
                  </a>
                  <div class="flex-center h-16 w-16 bg-grey-5 rounded-full">
                     <p class="font-medium text-2xl text-blue-5">F.T</p>
                  </div>
               </div>
            </div>
            <!-- <UserInfo /> -->
         </div>

         <!-- Mobile title -->
         <h1 class="page-title lg:hidden">{{ title() }}</h1>
         <div class="max-w-[1500px] 2xl:mx-auto  p-6 pt-7.5 pb-20 xl:px-12 ">
            <ng-content></ng-content>
         </div>
      </main>
   </div>`,
   styles: `
      .page-layout {
         grid-template-columns: 248px auto;
      }
   `,
})
export class PageLayout {
   title = input<string>('');
}
