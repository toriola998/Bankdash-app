import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@core/services/user-service';

@Component({
   selector: 'app-top-bar',
   imports: [RouterLink],
   template: `
      <div class="flex-items gap-x-5 w-full">
         <a
            routerLink="/settings"
            class="flex-center h-10 w-10 bg-grey-5 rounded-full">
            <img src="/icons/settings.svg" alt="" />
         </a>
         <div class="flex-center h-13 w-13 bg-grey-5 rounded-full">
            <p class="font-medium text-2xl text-blue-5">{{ userInitials() }}</p>
         </div>
      </div>
   `,
})
export class TopBar {
   userService = inject(UserService);

   userInitials = computed(() => {
      const profile = this.userService.userProfile();
      if (!profile) return '';
      const first = profile.firstName?.charAt(0) ?? '';
      const last = profile.lastName?.charAt(0) ?? '';
      return `${first}${last}`.toUpperCase();
   });
}
