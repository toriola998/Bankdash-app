import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { environment as firebaseConfig } from '../../../environments/environment.development';

export const firebaseApp = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
   getAnalytics(firebaseApp);
}

export const db = getFirestore(firebaseApp);
