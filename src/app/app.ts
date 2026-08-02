import { Component, signal } from '@angular/core';
import {
   Router,
   RouterOutlet,
   RouteConfigLoadStart,
   RouteConfigLoadEnd,
   NavigationCancel,
   NavigationError,
} from '@angular/router';

@Component({
   selector: 'app-root',
   imports: [RouterOutlet],
   template: `
      @if (loading()) {
         <div class="top-progress-bar">
            <div class="bar-indeterminate"></div>
         </div>
      }

      <router-outlet />
   `,
   styles: `
      .top-progress-bar {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 3px;
         background-color: oklch(92.8% 0.006 264.531);
         overflow: hidden;
         z-index: 9999;
      }

      .bar-indeterminate {
         height: 100%;
         background-color: #1814f3;
         width: 100%;
         animation: indeterminate 1.5s infinite ease-in-out;
         transform-origin: 0% 50%;
      }

      @keyframes indeterminate {
         0% {
            transform: translateX(-100%) scaleX(0.2);
         }
         50% {
            transform: translateX(0%) scaleX(0.5);
         }
         100% {
            transform: translateX(100%) scaleX(1);
         }
      }
   `,
})
export class App {
   protected readonly title = signal('banking-app');
   protected readonly loading = signal(false);

   constructor(router: Router) {
      router.events.subscribe(event => {
         if (event instanceof RouteConfigLoadStart) {
            this.loading.set(true);
         }

         if (
            event instanceof RouteConfigLoadEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError
         ) {
            this.loading.set(false);
         }
      });
   }
}
