import { Component, input, model } from '@angular/core';

@Component({
   selector: 'app-toggle-switch',
   standalone: true,
   template: `
      <label class="toggle-container gap-x-5.5">
         <button
            type="button"
            role="switch"
            [attr.aria-checked]="checked()"
            (click)="toggle()"
            class="toggle-btn"
            [class.active]="checked()">
            <span class="toggle-thumb"></span>
         </button>

         @if (label()) {
            <span class="toggle-label font-normal">{{ label() }}</span>
         }
      </label>
   `,
   styles: [
      `
         :host {
            display: inline-block;
         }

         .toggle-container {
            display: flex;
            align-items: center;
            gap: 22px;
            cursor: pointer;
            user-select: none;
         }

         .toggle-label {
            font-size: 14px;
            color: #232323;
         }

         .toggle-btn {
            width: 56px;
            height: 30px;
            background-color: #dfeaf2;
            border-radius: 9999px;
            border: none;
            padding: 2px;
            cursor: pointer;
            transition: background-color 0.2s;
         }

         .toggle-btn.active {
            background-color: #16dbcc;
         }

         .toggle-thumb {
            display: block;
            width: 27px;
            height: 26px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.2s;
         }

         .toggle-btn.active .toggle-thumb {
            transform: translateX(26px);
         }
      `,
   ],
})
export class ToggleSwitch {
   checked = model(false);
   label = input<string>('');

   toggle() {
      this.checked.update(val => !val);
   }
}
