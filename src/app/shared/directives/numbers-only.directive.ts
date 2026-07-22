import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
   selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
   constructor(private el: ElementRef<HTMLInputElement>) {}

   @HostListener('keydown', ['$event'])
   onKeyDown(event: KeyboardEvent) {
      const allowedKeys = [
         'Backspace',
         'Delete',
         'ArrowLeft',
         'ArrowRight',
         'Tab',
         'Home',
         'End',
      ];

      // Allow navigation keys
      if (allowedKeys.includes(event.key)) {
         return;
      }

      // Allow Ctrl/Cmd shortcuts
      if (
         (event.ctrlKey || event.metaKey) &&
         ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())
      ) {
         return;
      }

      // Digits only
      if (!/^\d$/.test(event.key)) {
         event.preventDefault();
      }
   }

   @HostListener('input')
   onInput() {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(
         /\D/g,
         '',
      );
   }
}
