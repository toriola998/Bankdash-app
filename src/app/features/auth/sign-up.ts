import { Component, inject } from '@angular/core';
import { Button } from '@shared/ui/button';
import { FormField } from '@shared/ui/form-field';
import { getFirebaseErrMsg } from '@shared/utils/firebase-error';
import { AuthLayout, AuthCta } from '@core/layouts/auth-layout';
import {
   FormGroup,
   FormControl,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';
import { AuthService } from './services/auth-service';
import { ToastService } from '@core/services/toast-service';

@Component({
   selector: 'app-login',
   imports: [Button, AuthLayout, ReactiveFormsModule, FormField],
   template: `
      <auth-layout title="Sign up" [cta]="loginCta">
         <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
            <div class="sm:grid grid-cols-2 gap-x-4">
               <app-form-field
                  label="First Name"
                  [control]="signupForm.controls.firstName">
                  <input
                     id="firstName"
                     type="text"
                     formControlName="firstName"
                     placeholder="e.g John" />
               </app-form-field>

               <app-form-field
                  label="Last Name"
                  [control]="signupForm.controls.lastName">
                  <input
                     id="lastName"
                     type="text"
                     formControlName="lastName"
                     placeholder="e.g Doe" />
               </app-form-field>
            </div>

            <app-form-field label="Email" [control]="signupForm.controls.email">
               <input
                  id="email"
                  type="text"
                  formControlName="email"
                  placeholder="johndoe@gmail.com" />
            </app-form-field>

            <app-form-field
               label="Password"
               [control]="signupForm.controls.password">
               <input
                  id="password"
                  type="password"
                  formControlName="password"
                  placeholder="@Password@123" />
            </app-form-field>

            <app-button
               text="Sign up"
               customClass="blue w-full !rounded-full mt-10"></app-button>
         </form>
      </auth-layout>
   `,
})
export class SignUp {
   authService = inject(AuthService);
   toastService = inject(ToastService);

   signupForm = new FormGroup({
      firstName: new FormControl('', {
         nonNullable: true,
         validators: [Validators.required],
      }),

      lastName: new FormControl('', {
         nonNullable: true,
         validators: [Validators.required],
      }),
      email: new FormControl('', {
         nonNullable: true,
         validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
         nonNullable: true,
         validators: [Validators.required, Validators.minLength(6)],
      }),
   });

   async onSubmit() {
      if (this.signupForm.invalid) {
         this.signupForm.markAllAsTouched();
         return;
      }
      const { email, password, firstName, lastName } =
         this.signupForm.getRawValue();

      try {
         await this.authService.register(email, password, firstName, lastName);
      } catch (error: any) {
         this.toastService.error(getFirebaseErrMsg(error));
      }
   }

   loginCta: AuthCta = {
      prompt: 'Already have an account?',
      text: 'Sign in',
      link: '/',
   };
}
