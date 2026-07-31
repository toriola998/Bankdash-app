import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../../features/auth/services/auth-service';

export const authGuard: CanActivateFn = () => {
   const authService = inject(AuthService);
   const router = inject(Router);

   if (!authService.isInitializing()) {
      return authService.isLoggedIn() ? true : router.createUrlTree(['']);
   }

   // Wait for isInitializing to become false (stop initializing)
   return toObservable(authService.isInitializing).pipe(
      filter(isInitializing => !isInitializing),
      take(1),
      map(() => {
         if (authService.isLoggedIn()) {
            return true;
         }
         return router.createUrlTree(['']);
      }),
   );
};
