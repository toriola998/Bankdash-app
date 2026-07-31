import { Component } from '@angular/core';
import { PageLayout } from '@core/layouts/page-layout/page-layout';
import { TabsComponent } from './components/Tabs';
import { EditProfile } from './components/edit-profile';
import { Preferences } from './components/preferences';
import { Security } from './components/security';

@Component({
   selector: 'app-settings',
   imports: [PageLayout, TabsComponent, EditProfile, Preferences, Security],
   template: `
      <app-page-layout title="Settings">
         <div class="card p-4 sm:p-8">
            <app-tabs>
               <div edit-profile>
                  <app-edit-profile />
               </div>

               <div preferences>
                  <app-preferences />
               </div>

               <div security>
                  <app-security />
               </div>
            </app-tabs>
         </div>
      </app-page-layout>
   `,
})
export class Settings {}
