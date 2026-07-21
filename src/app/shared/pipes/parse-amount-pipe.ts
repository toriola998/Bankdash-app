import { Pipe, PipeTransform } from '@angular/core';

export function parseAmount(value: string | null | undefined): number {
   if (!value) return 0;

   const numericString = value.replace(/,/g, '');
   return parseFloat(numericString) || 0;
}

@Pipe({
   name: 'parseAmount',
})
// export class ParseAmountPipe implements PipeTransform {
//    transform(value: unknown, ...args: unknown[]): unknown {
//       return null;
//    }
// }
export class ParseAmountPipe implements PipeTransform {
   transform(value: string | null | undefined): number {
      return parseAmount(value);
   }
}
