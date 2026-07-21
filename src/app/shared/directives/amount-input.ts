import { Directive, HostListener } from '@angular/core';

@Directive({
   selector: '[appAmountInput]',
   standalone: true,
})
export class AmountInputDirective {
   @HostListener('input', ['$event'])
   onInput(event: Event) {
      const input = event.target as HTMLInputElement;

      input.value = this.sanitize(input.value);
   }

   private sanitize(value: string): string {
      // Remove commas first
      value = value.replace(/,/g, '');

      // Remove everything except numbers and '.'
      value = value.replace(/[^\d.]/g, '');

      // Don't allow '.' first
      if (value.startsWith('.')) {
         value = '';
      }

      // Only one decimal
      const firstDot = value.indexOf('.');
      if (firstDot !== -1) {
         value =
            value.substring(0, firstDot + 1) +
            value.substring(firstDot + 1).replace(/\./g, '');
      }

      // Leading zero rule
      if (/^0\d/.test(value)) {
         value = '0';
      }

      // Two decimal places
      if (value.includes('.')) {
         const [whole, decimal] = value.split('.');
         value = `${whole}.${decimal.slice(0, 2)}`;
      }

      // Add commas
      const [whole, decimal] = value.split('.');

      const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return decimal !== undefined
         ? `${formattedWhole}.${decimal}`
         : formattedWhole;
   }
}
