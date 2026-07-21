import { Component, signal, inject } from '@angular/core';
import { AmountInputDirective } from '../../../../shared/directives/amount-input';
import { ModalService } from '../../../../shared/services/modal';
import {
   FormControl,
   ReactiveFormsModule,
   Validators,
   FormGroup,
} from '@angular/forms';
import { Modal } from '../../../../shared/ui/modal';
import { TransferConfirmation } from './transfer-confirmation';

interface Beneficiary {
   id: number;
   name: string;
   role: string;
   image: string;
}

@Component({
   selector: 'app-quick-transfer',
   imports: [
      AmountInputDirective,
      ReactiveFormsModule,
      Modal,
      TransferConfirmation,
   ],
   standalone: true,
   template: `
      <div class="card p-4 sm:p-8">
         <div class="flex-items gap-x-8">
            <ul class="flex gap-x-2">
               @for (item of beneficiaryList; track item.id) {
                  <li
                     (click)="getBeneficiary(item)"
                     class="px-1 py-1 cursor-pointer"
                     [class]="
                        activeBeneficiary()?.id === item.id
                           ? 'border-2 border-blue rounded-2xl'
                           : ''
                     ">
                     <img
                        [src]="item.image"
                        alt=""
                        class="rounded-full h-18 w-18 mx-auto block" />
                     <p class="text-center mt-3">{{ item.name }}</p>
                     <p class="text-blue-1 text-center text-[15px]">
                        {{ item.role }}
                     </p>
                  </li>
               }
            </ul>
            <div class=" flex-center h-12 w-12 rounded-full more">
               <img src="/icons/chevron-grey-right.svg" alt="" />
            </div>
         </div>

         <div class="flex-items mt-7">
            <label class="!text-blue-1 sm:w-36" for="amount"
               >Write amount</label
            >
            <form
               [formGroup]="amountForm"
               (ngSubmit)="onSubmit()"
               class="w-full">
               <div class="relative flex-items h-12.5 pr-0.5 w-full">
                  <div class="relative w-full">
                     <input
                        appAmountInput
                        id="amount"
                        type="text"
                        formControlName="amount"
                        placeholder="525.00"
                        class="!border-0 bg-grey-6 !rounded-full w-full" />

                     @if (
                        amountForm.controls.amount.invalid &&
                        amountForm.controls.amount.touched
                     ) {
                        <p
                           class="text-red-600 text-[13px] absolute top-12 left-5">
                           Amount is required
                        </p>
                     }
                  </div>

                  <button
                     type="submit"
                     class="btn blue !rounded-full h-12.5 px-6 flex-items gap-x-3 absolute right-0">
                     Send
                     <img src="/icons/send.svg" alt="" />
                  </button>
               </div>
            </form>
         </div>
      </div>

      <!----******** CONFRIMATION SCREEN***********---->
      @if (modal.isOpen()) {
         <app-modal
            title="Quick Transfer"
            subText="You're about to make a transfer to..."
            (closeModal)="modal.close()">
            <app-transfer-confirmation
               [activeBeneficiary]="activeBeneficiary()"
               [amountValue]="
                  amountForm.value.amount
               "></app-transfer-confirmation>
         </app-modal>
      }
   `,
   styles: `
      .more {
         box-shadow: 4px 4px 18px -2px #e7e4e8cc;
      }
   `,
})
export class QuickTransfer {
   modal = inject(ModalService);

   amountForm = new FormGroup({
      amount: new FormControl<string>('', {
         nonNullable: true,
         validators: [Validators.required],
      }),
   });

   onSubmit() {
      if (this.amountForm.invalid) {
         this.amountForm.markAllAsTouched();
         return;
      }
      console.log(this.amountForm.value.amount, 'value');
      console.log(this.amountForm.controls.amount.value);
      this.modal.open();
   }

   beneficiaryList: Beneficiary[] = [
      {
         id: 0,
         name: 'Livia Bator',
         role: 'CEO',
         image: '/images/users/livia.svg',
      },
      {
         id: 1,
         name: 'Randy Press',
         role: 'Director',
         image: '/images/users/randy-press.svg',
      },
      {
         id: 2,
         name: 'Workman',
         role: 'Designer',
         image: '/images/users/workman.svg',
      },
   ];

   activeBeneficiary = signal<Beneficiary>(this.beneficiaryList[0]);

   getBeneficiary(item: Beneficiary) {
      console.log(item);
      this.activeBeneficiary.set(item);
   }
}
