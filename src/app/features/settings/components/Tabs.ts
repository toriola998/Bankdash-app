import { Component, signal } from '@angular/core';

@Component({
   selector: 'app-tabs',
   standalone: true,
   template: `
      <div class="tab-list" role="tablist">
         <button
            role="tab"
            [attr.aria-selected]="activeTab() === 'edit-profile'"
            [class.active]="activeTab() === 'edit-profile'"
            (click)="activeTab.set('edit-profile')">
            Edit Profile
         </button>

         <button
            role="tab"
            [attr.aria-selected]="activeTab() === 'preferences'"
            [class.active]="activeTab() === 'preferences'"
            (click)="activeTab.set('preferences')">
            Preferences
         </button>

         <button
            role="tab"
            [attr.aria-selected]="activeTab() === 'security'"
            [class.active]="activeTab() === 'security'"
            (click)="activeTab.set('security')">
            Security
         </button>
      </div>

      <div class="tab-panels mt-5">
         @if (activeTab() === 'edit-profile') {
            <div role="tabpanel">
               <ng-content select="[edit-profile]"></ng-content>
            </div>
         } @else if (activeTab() === 'preferences') {
            <div role="tabpanel">
               <ng-content select="[preferences]"></ng-content>
            </div>
         } @else if (activeTab() === 'security') {
            <div role="tabpanel">
               <ng-content select="[security]"></ng-content>
            </div>
         }
      </div>
   `,
   styles: [
      `
         .tab-list {
            display: flex;
            border-bottom: 2px solid #f4f5f7;
            gap: 16px;
         }
         .tab-list button {
            background: none;
            border: none;
            padding: 8px 16px;
            cursor: pointer;
            font-weight: 500;
            color: #718ebf;
            border-bottom: 2px solid transparent;
            margin-bottom: -2px;
         }
         .tab-list button.active {
            color: #1814f3;
            border-bottom-color: #1814f3;
         }
         .tab-panels {
            padding: 16px 0;
         }
      `,
   ],
})
export class TabsComponent {
   activeTab = signal<'edit-profile' | 'preferences' | 'security'>(
      'edit-profile',
   );
}
