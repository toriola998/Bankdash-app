import { FirebaseError } from 'firebase/app';

export function getFirebaseErrMsg(error: FirebaseError): string {
   console.log(error, 'error from firebase message func', error.code);
   switch (error.code) {
      case 'auth/email-already-in-use':
         return 'An account already exists with this email.';

      case 'auth/invalid-email':
         return 'Please enter a valid email address.';

      case 'auth/weak-password':
         return 'Password should be at least 6 characters.';

      default:
         return 'Something went wrong. Please try again.';
   }
}
