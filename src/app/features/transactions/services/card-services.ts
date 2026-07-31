import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth-service';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@core/config/firebase.config';

export type CardPayload = {
   cardType: string;
   nameOnCard: string;
   cardNumber: string;
   expirationDate: string;
   bankName: string;
};

@Injectable({ providedIn: 'root' })
export class CardService {
   private authService = inject(AuthService);

   async addCard(data: CardPayload): Promise<void> {
      const uid = this.authService.currentUser()?.uid;
      if (!uid) throw new Error('User is not authenticated');

      const last4 = data.cardNumber.slice(-4);

      await addDoc(collection(db, 'users', uid, 'cards'), {
         cardHolder: data.nameOnCard,
         cardNumberMasked: `**** **** **** ${last4}`,
         balance: 0,
         validThru: data.expirationDate,
         cardType: data.cardType,
         bankName: data.bankName,
      });
   }
}
