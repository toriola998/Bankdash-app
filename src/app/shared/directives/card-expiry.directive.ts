import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
   selector: '[appCardExpiryDirective]',
})
export class CardExpiryDirective {
   constructor(private el: ElementRef<HTMLInputElement>) {}

   @HostListener('input')
   onInput() {
      let value = this.el.nativeElement.value;

      value = value.replace(/\D/g, '');
      value = value.substring(0, 6);

      if (value.length > 2) {
         value = value.slice(0, 2) + '/' + value.slice(2);
      }
      this.el.nativeElement.value = value;
   }
}
