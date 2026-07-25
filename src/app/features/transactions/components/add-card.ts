import { Component, input, computed } from '@angular/core';
import { FormField } from '../../../shared/ui/form-field';
import { Button } from '../../../shared/ui/button';
import { CardExpiryDirective } from '../../../shared/directives/card-expiry.directive';
import { NumbersOnlyDirective } from '../../../shared/directives/numbers-only.directive';
import { CreditCardNumberDirective } from '../../../shared/directives/credit-card-number.directive';
import {
   FormGroup,
   FormControl,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';

@Component({
   selector: 'app-add-card',
   imports: [
      ReactiveFormsModule,
      FormField,
      Button,
      CardExpiryDirective,
      NumbersOnlyDirective,
      CreditCardNumberDirective,
   ],
   template: ` <form [formGroup]="addCardForm" (ngSubmit)="onSubmit()">
      <div [class]="gridClass()">
         <app-form-field
            label="Card holder name"
            [control]="addCardForm.controls.cardHolderName">
            <input
               id="cardHolderName"
               type="text"
               formControlName="cardHolderName"
               placeholder="John Doe" />
         </app-form-field>

         <app-form-field
            label="Card number"
            [control]="addCardForm.controls.cardNumber">
            <input
               appCreditCardNumberDirective
               id="cardNumber"
               type="text"
               formControlName="cardNumber"
               placeholder="4585 4236 5124 8563" />
         </app-form-field>
      </div>

      <div class="sm:grid grid-cols-2 gap-x-4">
         <app-form-field
            label="Expiry date"
            [control]="addCardForm.controls.expiryDate">
            <input
               appCardExpiryDirective
               type="text"
               id="expiryDate"
               name="expiryDate"
               placeholder="MM/YYYY"
               formControlName="expiryDate" />
         </app-form-field>

         <app-form-field label="CVV" [control]="addCardForm.controls.cvv">
            <input
               appNumbersOnly
               id="cvv"
               type="text"
               formControlName="cvv"
               placeholder="***"
               maxlength="3" />
         </app-form-field>
      </div>

      <app-button text="Add Card" [customClass]="buttonClass()"></app-button>
   </form>`,
   styles: ``,
})
export class AddCard {
   isGrid = input<boolean>(false);
   isSmallBtn = input<boolean>(false);

   buttonClass = computed(() => {
      const layoutClasses = this.isSmallBtn()
         ? '!rounded-xl w-40 mt-7.5'
         : '!rounded-full w-full mt-10';

      return `btn blue ${layoutClasses}`;
   });

   gridClass = computed(() => {
      const gridClasses = this.isGrid() ? 'sm:grid grid-cols-2 gap-x-4' : '';
      return gridClasses;
   });

   addCardForm = new FormGroup({
      cardHolderName: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required]),
   });

   onSubmit() {
      if (this.addCardForm.invalid) {
         this.addCardForm.markAllAsTouched();
         return;
      }
      console.log(this.addCardForm.value, 'value');
      console.log(this.addCardForm.controls, 'controls');
   }
}
