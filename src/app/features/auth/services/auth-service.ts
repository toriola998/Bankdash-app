import { Injectable, inject } from '@angular/core';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import { UserService } from '@core/services/user-service';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   private readonly auth = getAuth();
   userService = inject(UserService);

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
      const userCredential = await signInWithEmailAndPassword(
         this.auth,
         email,
         password,
      );

      const { uid } = userCredential.user;
      await this.userService.fetchUserProfile(uid);

      return userCredential.user;
   }
}
