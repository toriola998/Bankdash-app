import { Component } from '@angular/core';
import { PageLayout } from '../../core/layouts/page-layout/page-layout';

@Component({
   selector: 'app-settings',
   imports: [PageLayout],
   template: ` <app-page-layout></app-page-layout> `,
})
export class Settings {}
