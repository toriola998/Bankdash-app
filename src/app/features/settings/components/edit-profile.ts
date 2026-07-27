import { Component } from '@angular/core';
import { Button } from '@shared/ui/button';
import { FormField } from '@shared/ui/form-field';
import { NumbersOnlyDirective } from '@shared/directives/numbers-only.directive';
import {
   FormGroup,
   FormControl,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';
import { PhotoUpload } from './photo-upload';

@Component({
   selector: 'app-edit-profile',
   imports: [Button, ReactiveFormsModule, FormField, PhotoUpload],
   template: `
      <div class="lg:grid grid-cols-[130px_auto] lg:gap-x-5 xl:gap-x-14">
         <app-photo-upload></app-photo-upload>
         <form [formGroup]="editProfileForm" (ngSubmit)="onSubmit()">
            <div class="md:grid grid-cols-2 gap-x-7">
               <app-form-field
                  label="First Name"
                  [control]="editProfileForm.controls.firstName">
                  <input
                     id="firstName"
                     type="text"
                     formControlName="firstName"
                     defaultValue="Faidat" />
               </app-form-field>
               <app-form-field
                  label="Last Name"
                  [control]="editProfileForm.controls.lastName">
                  <input
                     id="lastName"
                     type="text"
                     formControlName="lastName"
                     defaultValue="Toriola" />
               </app-form-field>
               <app-form-field
                  label="Email"
                  [control]="editProfileForm.controls.email">
                  <input
                     id="email"
                     type="text"
                     formControlName="email"
                     defaultValue="toriola@gmail.com" />
               </app-form-field>

               <app-form-field
                  label="Password"
                  [control]="editProfileForm.controls.password">
                  <input
                     id="password"
                     type="password"
                     formControlName="password"
                     placeholder="@Password@123" />
               </app-form-field>

               <app-form-field
                  label="Date of birth"
                  [control]="editProfileForm.controls.dateOfBirth">
                  <input
                     id="dateOfBirth"
                     type="date"
                     formControlName="dateOfBirth" />
               </app-form-field>
               <app-form-field
                  label="Address"
                  [control]="editProfileForm.controls.address">
                  <input
                     id="address"
                     type="text"
                     formControlName="address"
                     placeholder="20, Houston street, London" />
               </app-form-field>
               <app-form-field
                  label="City"
                  [control]="editProfileForm.controls.city">
                  <input
                     id="city"
                     type="text"
                     formControlName="city"
                     placeholder="New York" />
               </app-form-field>
               <app-form-field
                  label="Postal Code"
                  [control]="editProfileForm.controls.postalCode">
                  <input
                     id="postalCode"
                     type="text"
                     formControlName="postalCode"
                     placeholder="100001" />
               </app-form-field>
            </div>
            <app-button
               text="Save"
               customClass="blue w-40 ml-auto mt-10"></app-button>
         </form>
      </div>
   `,
})
export class EditProfile {
   editProfileForm = new FormGroup({
      firstName: new FormControl({ value: 'Faidat', disabled: true }, [
         Validators.required,
      ]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
   });

   onSubmit() {
      if (this.editProfileForm.invalid) {
         this.editProfileForm.markAllAsTouched();
         return;
      }
      console.log(this.editProfileForm.value, 'value');
      console.log(this.editProfileForm.controls, 'controls');
   }
}
