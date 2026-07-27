import { Component, model } from '@angular/core';

@Component({
   selector: 'app-toggle-switch',
   standalone: true,
   template: `
      <button
         type="button"
         role="switch"
         [attr.aria-checked]="checked()"
         (click)="toggle()"
         class="toggle-btn"
         [class.active]="checked()">
         <span class="toggle-thumb"></span>
      </button>
   `,
   styles: [
      `
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
            height: 27px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.2s;
         }
         .toggle-btn.active .toggle-thumb {
            transform: translateX(25px);
         }
      `,
   ],
})
export class ToggleSwitch {
   checked = model(false);

   toggle() {
      this.checked.update(val => !val);
   }
}
