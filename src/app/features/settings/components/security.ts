import { Component, signal } from '@angular/core';
import { Button } from '@shared/ui/button';
import { FormField } from '@shared/ui/form-field';
import { PasswordToggle } from '@shared/ui/password-toggle';
import { ToggleSwitch } from './ToggleSwitch';
import {
   FormGroup,
   FormControl,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';

@Component({
   selector: 'app-security',
   imports: [
      ToggleSwitch,
      Button,
      ReactiveFormsModule,
      FormField,
      PasswordToggle,
   ],
   template: `
      <p class="text-black-5 font-medium mb-4.5">Two Factor Authentication</p>
      <app-toggle-switch
         label="Enable or disable two factor authentication"
         [(checked)]="enableTwoFactor" />

      <p class="text-black-5 font-medium mb-2.5 mt-5">Change Password</p>
      <form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()">
         <div class="max-w-[50%]">
            <app-form-field
               label="Password"
               [control]="changePasswordForm.controls.currentPassword">
               <input
                  id="currentPassword"
                  [type]="showPassword() ? 'text' : 'password'"
                  formControlName="currentPassword"
                  placeholder="@Password@123" />
               <app-password-toggle
                  [showPassword]="showPassword()"
                  (toggle)="togglePassword()">
               </app-password-toggle>
            </app-form-field>

            <app-form-field
               label="Password"
               [control]="changePasswordForm.controls.newPassword">
               <input
                  id="newPassword"
                  [type]="showNewPassword() ? 'text' : 'password'"
                  formControlName="newPassword"
                  placeholder="@Password@123" />

               <app-password-toggle
                  [showPassword]="showNewPassword()"
                  (toggle)="toggleNewPassword()">
               </app-password-toggle>
            </app-form-field>
         </div>

         <app-button
            text="Save"
            customClass="blue w-40 ml-auto mt-10"></app-button>
      </form>
   `,
   styles: ``,
})
export class Security {
   enableTwoFactor = false;

   changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
      ]),
   });

   onSubmit() {
      if (this.changePasswordForm.invalid) {
         this.changePasswordForm.markAllAsTouched();
         return;
      }
      console.log(this.changePasswordForm.value, 'value');
      console.log(this.changePasswordForm.controls, 'controls');
   }

   showPassword = signal(false);
   togglePassword() {
      this.showPassword.update(value => !value);
   }

   showNewPassword = signal(false);
   toggleNewPassword() {
      this.showNewPassword.update(value => !value);
   }
}
