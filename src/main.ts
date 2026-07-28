import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { environment as firebaseConfig } from './environments/environment.development';

const firebaseApp = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
   getAnalytics(firebaseApp);
}

bootstrapApplication(App, appConfig).catch(err => console.error(err));
