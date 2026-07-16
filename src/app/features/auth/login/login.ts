import { Component } from '@angular/core';
import { Button } from '../../../shared/button';
import { AuthLayout, AuthCta } from '../../../core/layouts/auth-layout';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
   selector: 'app-login',
   imports: [Button, AuthLayout, ReactiveFormsModule],
   template: `
      <auth-layout title="Login" [cta]="signUpCta">
         <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="mb-5">
               <label for="email">Email </label>
               <input
                  id="email"
                  type="text"
                  formControlName="email"
                  placeholder="johndoe@gmail.com" />
            </div>

            <label for="password">Password </label>
            <input
               id="password"
               type="password"
               formControlName="password"
               placeholder="@Password@123" />

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
      email: new FormControl(''),
      password: new FormControl(''),
   });

   onSubmit() {
      console.log('Hello world');
      // TODO: Use output() with form value
      console.warn(this.loginForm.value);
   }

   signUpCta: AuthCta = {
      prompt: "Don't have an account?",
      text: 'Sign up',
      link: '/signup',
   };
}
