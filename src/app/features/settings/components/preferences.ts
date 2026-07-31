import { Component } from '@angular/core';
import { ToggleSwitch } from './ToggleSwitch';
import { Select } from './select';
import { Button } from '@shared/ui/button';

@Component({
   selector: 'app-preferences',
   imports: [ToggleSwitch, Select, Button],
   template: `
      <div class="flex flex-col gap-y-5 sm:grid grid-cols-2 gap-x-7.5">
         <app-select label="Currency" [options]="currencyOptions" />
         <app-select label="Currency" [options]="currencyOptions" />
      </div>

      <p class="text-black-5 font-medium mb-4.5 mt-6.5">Notification</p>

      <div class="flex flex-col gap-y-4.5">
         <app-toggle-switch
            label="I send or receive digita currency"
            [(checked)]="digitalCurrency" />
         <app-toggle-switch
            label="I receive merchant order"
            [(checked)]="merchantOrder" />
         <app-toggle-switch
            label="There are recommendation for my account"
            [(checked)]="accountRecommendation" />
      </div>

      <app-button
         text="Save"
         customClass="blue w-40 ml-auto mt-10"></app-button>
   `,
})
export class Preferences {
   accountRecommendation = false;
   merchantOrder = false;
   digitalCurrency = false;

   currencyOptions = [
      {
         label: 'USD',
         value: 'USD',
      },
   ];
}
