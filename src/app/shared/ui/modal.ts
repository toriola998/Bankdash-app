import { Component, output, input } from '@angular/core';

@Component({
   selector: 'app-modal',
   imports: [],
   template: `<div
      class="left-0 bottom-0 top-0 right-0 z-[100] fixed h-full flex-center px-4 modal-overlay">
      <div class="relative card p-4 sm:px-6 pb-8 modal-inner">
         <div class="flex-items justify-between">
            <p class="page-title">{{ title() }}</p>

            <button
               [class]="customClass()"
               (click)="closeModal.emit()"
               class="rounded-full hover:bg-gray-100 p-1 z-50">
               <img src="/icons/cancel.svg" alt="" />
            </button>
         </div>
         <p class="text-sm text-grey">{{ subText() }}</p>

         <div class="mt-8">
            <ng-content></ng-content>
         </div>
      </div>
   </div>`,
   styles: `
      .modal-overlay {
         background: rgba(0, 0, 0, 0.6);
      }
      @keyframes modalActive {
         from {
            transform: scale(0.7);
         }
         to {
            transform: scale(1);
         }
      }

      .modal-inner {
         animation-name: modalActive;
         animation-duration: 0.2s;
      }
   `,
})
export class Modal {
   closeModal = output<void>();
   customClass = input();

   title = input<string>('');
   subText = input<string>('');
}
