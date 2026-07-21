import { Component, input, signal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputComponent, OtpStatus } from 'ngx-otp-input';
import { ParseAmountPipe } from '../../../../shared/pipes/parse-amount-pipe';
import { LoadingSpinner } from '../../../../shared/ui/loading-spinner';
import { ModalService } from '../../../../shared/services/modal';
import { Modal } from '../../../../shared/ui/modal';

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
      LoadingSpinner,
      Modal,
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
      </form>

      @if (showLoader()) {
         <app-loading-spinner></app-loading-spinner>
      }

      @if (showSuccess()) {
         <app-modal
            title="Succcessful!"
            (closeModal)="modal.close()"
            customClass="w-100">
            <img
               src="/images/check-blue.png"
               alt=""
               class="mx-auto w-16 h-16 opacity-85" />
            <p class="text-center mt-2 mx-auto w-60">
               You have succcessfully completed your transfer!
            </p>
            <button class="btn blue w-full mt-10" (click)="modal.close()">
               Okay
            </button>
         </app-modal>
      } `,

   styles: ``,
})
export class TransferConfirmation {
   showLoader = signal<boolean>(false);
   showSuccess = signal<boolean>(false);
   activeBeneficiary = input<ActiveBeneficiary>();
   amountValue = input<string>();

   modal = inject(ModalService);

   status: OtpStatus = 'idle';

   form = new FormGroup({
      otp: new FormControl('', { nonNullable: true }),
   });

   verifyOtp(code: string): void {
      // Verify the code, then set status to 'success' or 'error'
   }
}
