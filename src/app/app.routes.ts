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
   // Lazy load route, the component is "éxport default", Hence no need for .then()
   {
      path: 'dashboard',
      loadComponent: () => import('./features/dashboard/dashboard'),
   },
   // Lazy load route, the component is not éxport default, Hence .then()
   {
      path: 'transactions',
      loadComponent: () =>
         import('./features/transactions/transactions').then(
            m => m.Transactions,
         ),
   },
   {
      path: 'accounts',
      loadComponent: () =>
         import('./features/accounts/accounts').then(m => m.Accounts),
   },
   {
      path: 'investments',
      loadComponent: () =>
         import('./features/investments/investments').then(m => m.Investments),
   },
   {
      path: 'cards',
      loadComponent: () => import('./features/cards/cards').then(m => m.Cards),
   },
];
