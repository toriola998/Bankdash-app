import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputComponent, OtpStatus } from 'ngx-otp-input';
import { ParseAmountPipe } from '../../../../shared/pipes/parse-amount-pipe';

interface ActiveBeneficiary {
   id: number;
   image: string;
   name: string;
   role: string;
}

@Component({
   selector: 'app-transfer-confirmation',
   imports: [
      ParseAmountPipe,
      CurrencyPipe,
      ReactiveFormsModule,
      NgxOtpInputComponent,
   ],
   standalone: true,
   template: `<div class="flex-center gap-x-3">
         <img
            [src]="activeBeneficiary()?.image"
            alt=""
            class="rounded-full h-20 w-20" />
         <div>
            <p class="text-lg font-medium">
               {{ activeBeneficiary()?.name }}
            </p>
            <p class="text-blue-1 font-medium text-[15px] ">
               {{ activeBeneficiary()?.role }}
            </p>
         </div>
      </div>

      <div class="mb-10 pt-5 mt-5  border-t border-gray-200">
         <p class="text-center text-grey text-sm">Amount</p>
         <p class="text-xl md:text-3xl text-center font-semibold text-blue">
            {{ amountValue() | parseAmount | currency: 'NGN' }}
         </p>
      </div>
      <p class="text-grey mt-5 mb-3">
         Enter your transaction PIN to confirm transaction
      </p>

      <form [formGroup]="form" class="flex-center">
         <ngx-otp-input
            formControlName="otp"
            [length]="6"
            [status]="status"
            (otpComplete)="verifyOtp($event)"></ngx-otp-input>
      </form> `,

   styles: ``,
})
export class TransferConfirmation {
   activeBeneficiary = input<ActiveBeneficiary>();
   amountValue = input<string>();

   status: OtpStatus = 'idle';

   form = new FormGroup({
      otp: new FormControl('', { nonNullable: true }),
   });

   verifyOtp(code: string): void {
      // Verify the code, then set status to 'success' or 'error'
   }
}
