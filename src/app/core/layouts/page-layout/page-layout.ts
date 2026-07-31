import { Component } from '@angular/core';
import { input } from '@angular/core';
import { SideNav } from './components/side-nav/side-nav';
import { TopBar } from './components/top-bar';

@Component({
   selector: 'app-page-layout',
   imports: [SideNav, TopBar],
   template: ` <div class="lg:grid page-layout">
      <app-side-nav #sideNav> </app-side-nav>

      <main class="w-full min-h-screen overflow-auto bg-grey-5">
         <!-- Desktop top bar -->
         <div
            class="w-full hidden lg:block bg-white border-r border-grey-7 h-22">
            <div
               class="max-w-[1500px] 2xl:mx-auto lg:flex items-center h-22 justify-between px-10 ">
               <h1 class="page-title">{{ title() }}</h1>

               <app-top-bar />
            </div>
         </div>

         <!-- Mobile Top Bar -->
         <div class="lg:hidden">
            <div
               class="p-4 flex-between top-0 z-50 w-full bg-white border-b border-grey-7">
               <button (click)="sideNav.toggle()" class="lg:hidden">
                  <img src="/icons/nav-bar/menu.svg" alt="" />
               </button>

               <h1 class="page-title">{{ title() }}</h1>

               <app-top-bar />
            </div>
         </div>
         <div class="px-4 pt-7.5 lg:px-10 pb-20 max-w-[1500px] 2xl:mx-auto ">
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
