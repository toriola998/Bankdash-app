import { Component, input, output, computed } from '@angular/core';

@Component({
   selector: 'app-button',
   imports: [],
   standalone: true,
   template: ` <button
      class="text-sm btn"
      [class]="buttonClasses()"
      [type]="type()"
      [disabled]="disabled()"
      (click)="onClick()">
      @if (isLoading()) {
         <div
            class="btn-spinner w-5 h-5 rounded-full my-0 mx-auto border-[3px]
         border-t-current border-b-current border-l-current border-r-transparent"></div>
      } @else {
         <span class="flex gap-x-2 justify-center">
            <ng-content></ng-content>
            {{ text() }}
         </span>
      }
   </button>`,

   styles: `
      .btn-spinner {
         -webkit-animation: spin 0.7s linear infinite;
         /* Safari */
         animation: spin 0.7s linear infinite;
      }
   `,
})
export class Button {
   isLoading = input<boolean>(false);
   text = input<string>('');
   disabled = input<boolean>(false);
   type = input<'submit' | 'button'>('submit');
   customClass = input<string>('');

   action = output<void>();

   onClick() {
      if (this.type() === 'button') {
         this.action.emit();
      }
   }

   buttonClasses = computed(() => {
      return [
         this.customClass(),
         this.isLoading() ? 'cursor-not-allowed' : '',
         this.disabled() ? '!bg-grey-2' : '',
      ]
         .filter(Boolean)
         .join(' ');
   });
}
