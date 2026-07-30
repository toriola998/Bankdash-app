import { Injectable, inject, signal, computed } from '@angular/core';
import {
   User,
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
} from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import { UserService } from '@core/services/user-service';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private readonly auth = getAuth();
   userService = inject(UserService);

   currentUser = signal<User | null>(null);
   isInitializing = signal<boolean>(true);
   isLoggedIn = computed(() => !!this.currentUser());

   constructor() {
      this.initAuthListener();
   }

   private initAuthListener() {
      onAuthStateChanged(this.auth, async user => {
         this.currentUser.set(user);

         if (user) {
            await this.userService.fetchUserProfile(user.uid);
         } else {
            // this.userService.clearProfile();
            console.log('CLEAR USER PROFILE');
         }

         this.isInitializing.set(false);
      });
   }

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

      const { uid } = userCredential.user;
      const payload = {
         uid,
         firstName,
         lastName,
         email,
         createdAt: serverTimestamp(),
      };
      await this.userService.createUserProfile(payload);

      return userCredential.user;
   }

   async login(email: string, password: string) {
      const credential = await signInWithEmailAndPassword(
         this.auth,
         email,
         password,
      );

      return credential.user;
   }
}
