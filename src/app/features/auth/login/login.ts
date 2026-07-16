import { Component } from '@angular/core';
import { Button } from '../../../shared/button';
import { FormField } from '../../../shared/form-field';
import { AuthLayout, AuthCta } from '../../../core/layouts/auth-layout';
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
      <auth-layout title="Login" [cta]="signUpCta">
         <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <app-form-field label="Email" [control]="loginForm.controls.email">
               <input
                  id="email"
                  type="text"
                  formControlName="email"
                  placeholder="johndoe@gmail.com" />
            </app-form-field>

            <app-form-field
               label="Password"
               [control]="loginForm.controls.password">
               <input
                  id="password"
                  type="password"
                  formControlName="password"
                  placeholder="@Password@123" />
            </app-form-field>

            <app-button
               text="Login"
               customClass="blue w-full !rounded-full mt-10"></app-button>
         </form>
      </auth-layout>
   `,
   styles: '',
})
export class Login {
   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
      ]),
   });

   onSubmit() {
      if (this.loginForm.invalid) {
         this.loginForm.markAllAsTouched();
         return;
      }
      console.log(this.loginForm.value, 'value');
      console.log(this.loginForm.controls, 'controls');
   }

   signUpCta: AuthCta = {
      prompt: "Don't have an account?",
      text: 'Sign up',
      link: '/signup',
   };
}
