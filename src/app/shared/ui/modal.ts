import { Component, output, input } from '@angular/core';

@Component({
   selector: 'app-modal',
   standalone: true,
   template: `<div class="modal-overlay overlay z-[100]">
      <div
         class="relative card p-4 sm:px-6 pb-8 modal-inner"
         [class]="customClass()">
         <div class="flex-items justify-between">
            <p class="page-title">{{ title() }}</p>

            <button
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
   `,
})
export class Modal {
   closeModal = output<void>();
   customClass = input();

   title = input<string>('');
   subText = input<string>('');
}
