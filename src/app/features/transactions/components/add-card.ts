import {
   Component,
   input,
   computed,
   inject,
   signal,
   output,
} from '@angular/core';
import { FormField } from '@shared/ui/form-field';
import { Button } from '@shared/ui/button';
import { getFirebaseErrMsg } from '@shared/utils/firebase-error';
import { CardExpiryDirective } from '@shared/directives/card-expiry.directive';
import { NumbersOnlyDirective } from '@shared/directives/numbers-only.directive';
import { CreditCardNumberDirective } from '@shared/directives/credit-card-number.directive';
import { ToastService } from '@core/services/toast-service';
import { CardService } from '../services/card-services';
import {
   ReactiveFormsModule,
   Validators,
   NonNullableFormBuilder,
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

      <app-button
         text="Add Card"
         [customClass]="buttonClass()"
         [isLoading]="isLoading()"></app-button>
   </form>`,
})
export class AddCard {
   isLoading = signal<boolean>(false);
   isGrid = input<boolean>(false);
   isSmallBtn = input<boolean>(false);
   addCardSuccessEvent = output();

   private fb = inject(NonNullableFormBuilder);
   private cardService = inject(CardService);
   toastService = inject(ToastService);

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

   addCardForm = this.fb.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
      bankName: ['', Validators.required],
   });

   async onSubmit() {
      if (this.addCardForm.invalid) {
         this.addCardForm.markAllAsTouched();
         return;
      }
      try {
         const rawValues = this.addCardForm.getRawValue();
         this.isLoading.set(true);

         await this.cardService.addCard({
            cardType: 'Visa',
            nameOnCard: rawValues.cardHolderName,
            cardNumber: rawValues.cardNumber,
            expirationDate: rawValues.expiryDate,
            bankName: rawValues.bankName,
         });

         this.toastService.success('Card successfully added!');
         this.addCardSuccessEvent.emit();
         this.addCardForm.reset();
      } catch (error: any) {
         this.toastService.error(getFirebaseErrMsg(error));
      } finally {
         this.isLoading.set(false);
      }
   }
}
