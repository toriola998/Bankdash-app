import { Component } from '@angular/core';
import { input } from '@angular/core';
import { SideNav } from './components/side-nav';

@Component({
   selector: 'app-page-layout',
   imports: [SideNav],
   template: ` <div class="lg:grid page-layout">
      <app-side-nav> </app-side-nav>

      <main
         class="w-full p-6 pb-20 xl:px-12  min-h-screen overflow-auto  bg-grey-5">
         <div class="max-w-[1500px] 2xl:mx-auto">
            <!-- Desktop title and user info -->
            <div class="justify-between w-full hidden lg:flex">
               <h1 class="page-title">{{ title() }}</h1>
               <!-- <UserInfo /> -->
            </div>

            <!-- Mobile title -->
            <h1 class="page-title lg:hidden">{{ title() }}</h1>
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
