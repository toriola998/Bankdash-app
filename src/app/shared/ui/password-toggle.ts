import { Component, input, output } from '@angular/core';

@Component({
   selector: 'app-password-toggle',
   template: `
      <button
         type="button"
         (click)="toggle.emit()"
         class="absolute right-4 top-9">
         <img
            [src]="
               showPassword() ? '/icons/eye-off.svg' : '/icons/open-eye.svg'
            "
            alt="Toggle password visibility"
            width="25" />
      </button>
   `,
})
export class PasswordToggle {
   showPassword = input(false);
   toggle = output<void>();
}
