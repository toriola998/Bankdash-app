import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp, FieldValue } from 'firebase/firestore';
import { db } from '@core/config/firebase.config';

export interface UserProfile {
   uid: string;
   firstName: string;
   lastName: string;
   email: string;
   role?: string;
   createdAt?: FieldValue;
}

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private readonly auth = getAuth();

   async register(
      email: string,
      pass: string,
      firstName: string,
      lastName: string,
   ) {
      const userCredential = await createUserWithEmailAndPassword(
         this.auth,
         email,
         pass,
      );
      const uid = userCredential.user.uid;

      const profileData: UserProfile = {
         uid,
         firstName,
         lastName,
         email,
         role: 'user',
         createdAt: serverTimestamp(),
      };

      const reference = doc(db, 'users', uid);

      await setDoc(reference, profileData);
      //  this.userProfile.set(profileData);

      return userCredential.user;
   }
}
