import { Routes } from '@angular/router';
import { Login } from './features/auth/login';
import { SignUp } from './features/auth/sign-up';

export const routes: Routes = [
   {
      path: '',
      component: Login,
   },
   {
      path: 'signup',
      component: SignUp,
   },
];
