import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
   selector: '[appCreditCardNumberDirective]',
})
export class CreditCardNumberDirective {
   constructor(private el: ElementRef<HTMLInputElement>) {}

   @HostListener('input')
   onInput() {
      let value = this.el.nativeElement.value;
      value = value.replace(/\D/g, '');
      value = value.substring(0, 16); // Max 16 digits
      // Group into chunks of 4
      value = value.match(/.{1,4}/g)?.join(' ') ?? '';

      this.el.nativeElement.value = value;
   }
}
