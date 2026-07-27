import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';
import { TabsComponent } from './components/Tabs';
import { EditProfile } from './components/edit-profile';

@Component({
   selector: 'app-settings',
   imports: [PageLayout, TabsComponent, EditProfile],
   template: `
      <app-page-layout>
         <div class="card p-4 sm:p-8">
            <app-tabs>
               <div edit-profile>
                  <app-edit-profile></app-edit-profile>
               </div>
            </app-tabs>
         </div>
      </app-page-layout>
   `,
})
export class Settings {}
