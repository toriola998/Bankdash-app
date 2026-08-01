import { Component, inject, signal } from '@angular/core';
import { Button } from '@shared/ui/button';
import { FormField } from '@shared/ui/form-field';
import { AuthLayout, AuthCta } from '@core/layouts/auth-layout';
import { AuthService } from '../services/auth-service';
import { ToastService } from '@core/services/toast-service';
import { getFirebaseErrMsg } from '@shared/utils/firebase-error';
import { PasswordToggle } from '@shared/ui/password-toggle';
import { Router } from '@angular/router';
import {
   NonNullableFormBuilder,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';

@Component({
   selector: 'app-login',
   imports: [
      Button,
      AuthLayout,
      ReactiveFormsModule,
      FormField,
      PasswordToggle,
   ],
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
                  [type]="showPassword() ? 'text' : 'password'"
                  formControlName="password"
                  placeholder="@Password@123" />
               <app-password-toggle
                  [showPassword]="showPassword()"
                  (toggle)="togglePassword()">
               </app-password-toggle>
            </app-form-field>

            <app-button
               text="Login"
               [isLoading]="isLoading()"
               customClass="blue w-full !rounded-full mt-10"></app-button>
         </form>
      </auth-layout>
   `,
   styles: '',
})
export class Login {
   authService = inject(AuthService);
   toastService = inject(ToastService);

   private router = inject(Router);
   private fb = inject(NonNullableFormBuilder);
   isLoading = signal<boolean>(false);

   loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
   });

   async onSubmit() {
      if (this.loginForm.invalid) {
         this.loginForm.markAllAsTouched();
         return;
      }
      const { email, password } = this.loginForm.getRawValue();

      this.isLoading.set(true);
      try {
         await this.authService.login(email, password);
         this.router.navigate(['/dashboard']);
      } catch (error: any) {
         this.toastService.error(getFirebaseErrMsg(error));
      } finally {
         this.isLoading.set(false);
      }
   }

   showPassword = signal(false);
   togglePassword() {
      this.showPassword.update(value => !value);
   }

   signUpCta: AuthCta = {
      prompt: "Don't have an account?",
      text: 'Sign up',
      link: '/signup',
   };
}
