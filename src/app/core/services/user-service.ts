import { Injectable, signal } from '@angular/core';
import { doc, getDoc, setDoc, FieldValue } from 'firebase/firestore';
import { db } from '../config/firebase.config';

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
export class UserService {
   userProfile = signal<UserProfile | null>(null);

   async createUserProfile(profile: UserProfile): Promise<void> {
      await setDoc(doc(db, 'users', profile.uid), profile);
      this.userProfile.set(profile);
   }

   async fetchUserProfile(uid: string): Promise<UserProfile | null> {
      try {
         const docSnap = await getDoc(doc(db, 'users', uid));

         if (docSnap.exists()) {
            const profile = docSnap.data() as UserProfile;
            this.userProfile.set(profile);
            return profile;
         }
      } catch (err) {
         console.error('Failed to fetch user profile:', err);
      }
      this.userProfile.set(null);
      return null;
   }
}
