import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login';
import { SignUp } from './features/auth/pages/sign-up';
import { authGuard } from '@core/guards/auth-guard';

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
      canActivate: [authGuard],
   },
   // Lazy load route, the component is not éxport default, Hence .then()
   {
      path: 'transactions',
      loadComponent: () =>
         import('./features/transactions/transactions').then(
            m => m.Transactions,
         ),
      canActivate: [authGuard],
   },
   {
      path: 'accounts',
      loadComponent: () =>
         import('./features/accounts/accounts').then(m => m.Accounts),
      canActivate: [authGuard],
   },
   {
      path: 'investments',
      loadComponent: () =>
         import('./features/investments/investments').then(m => m.Investments),
      canActivate: [authGuard],
   },
   {
      path: 'cards',
      loadComponent: () => import('./features/cards/cards').then(m => m.Cards),
      canActivate: [authGuard],
   },
   {
      path: 'loans',
      loadComponent: () => import('./features/loans/loans').then(m => m.Loans),
      canActivate: [authGuard],
   },
   {
      path: 'services',
      loadComponent: () =>
         import('./features/services/services').then(m => m.Services),
      canActivate: [authGuard],
   },
   {
      path: 'settings',
      loadComponent: () =>
         import('./features/settings/settings').then(m => m.Settings),
      canActivate: [authGuard],
   },
];
