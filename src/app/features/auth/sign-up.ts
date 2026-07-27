import { Component } from '@angular/core';
import { Button } from '@shared/ui/button';
import { FormField } from '@shared/ui/form-field';
import { AuthLayout, AuthCta } from '@core/layouts/auth-layout';
import {
   FormGroup,
   FormControl,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';

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
   styles: '',
})
export class SignUp {
   signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
      ]),
   });

   onSubmit() {
      if (this.signupForm.invalid) {
         this.signupForm.markAllAsTouched();
         return;
      }
      console.log(this.signupForm.value, 'value');
      console.log(this.signupForm.controls, 'controls');
   }

   loginCta: AuthCta = {
      prompt: 'Already have an account?',
      text: 'Sign in',
      link: '/',
   };
}
