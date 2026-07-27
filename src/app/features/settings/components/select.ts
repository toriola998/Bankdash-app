import { Component, input, model } from '@angular/core';

@Component({
   selector: 'app-select',
   standalone: true,
   template: `
      @if (label()) {
         <label class="label">{{ label() }}</label>
      }

      <select
         class="native-select"
         [value]="value()"
         (change)="value.set($any($event.target).value)">
         @for (opt of options(); track opt.value) {
            <option [value]="opt.value">{{ opt.label }}</option>
         }
      </select>
   `,
   styles: [
      `
         :host {
            display: flex;
            flex-direction: column;
            gap: 4px;
         }
      `,
   ],
})
export class Select {
   options = input.required<{ label: string; value: any }[]>();
   label = input('');
   value = model<any>();
}
