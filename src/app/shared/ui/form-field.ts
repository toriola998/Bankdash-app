import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
   selector: 'app-form-field',
   standalone: true,
   imports: [],
   template: `
      <div class="mb-5">
         <label
            class="transition-colors"
            [class.error-label]="control().touched && control().invalid"
            >{{ label() }}</label
         >

         <ng-content></ng-content>

         @if (control().touched && control().invalid) {
            <div class="text-red-600 text-[13px] text-end">
               @if (control().errors?.['required']) {
                  <p>This field is required.</p>
               }

               @if (control().errors?.['email']) {
                  <p>Invalid email.</p>
               }

               @if (control().errors?.['minlength']) {
                  <p>Too short.</p>
               }
            </div>
         }
      </div>
   `,
   styles: `
      .error-label {
         color: #fb2c36;
      }
   `,
})
export class FormField {
   label = input<string>('');
   control = input.required<FormControl>();
}
