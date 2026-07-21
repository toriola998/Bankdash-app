import { Injectable, signal } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class ModalService {
   private modalState = signal(false);

   isOpen = this.modalState.asReadonly();

   open() {
      this.modalState.set(true);
   }

   close() {
      this.modalState.set(false);
   }
}
