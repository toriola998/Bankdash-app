import { Component } from '@angular/core';

@Component({
   selector: 'app-loading-spinner',
   standalone: true,
   template: `
      <div class="spinner-overlay overlay z-[200]">
         <div class="relative card p-4 sm:px-6 pb-8 modal-inner">
            <p>Loading</p>
            <div class="loader1 mx-auto mt-2"></div>
         </div>
      </div>
   `,
   styles: `
      .spinner-overlay {
         background: rgba(0, 0, 0, 0.3);
      }

      .loader1 {
         width: 40px;
         aspect-ratio: 1;
         display: grid;
         -webkit-mask: conic-gradient(from 15deg, #0000, #000);
         animation: l26 1s infinite steps(12);
      }
      .loader1,
      .loader1:before,
      .loader1:after {
         background:
            radial-gradient(closest-side at 50% 12.5%, #0052cc 96%, #0000) 50%
               0/20% 80% repeat-y,
            radial-gradient(closest-side at 12.5% 50%, #0052cc 96%, #0000) 0
               50%/80% 20% repeat-x;
      }
      .loader1:before,
      .loader1:after {
         content: '';
         grid-area: 1/1;
         transform: rotate(30deg);
      }
      .loader1:after {
         transform: rotate(60deg);
      }

      @keyframes l26 {
         100% {
            transform: rotate(1turn);
         }
      }
   `,
})
export class LoadingSpinner {}
