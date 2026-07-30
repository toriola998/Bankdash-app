import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';
// @ts-ignore
import 'toastify-js/src/toastify.css';

@Injectable({
   providedIn: 'root',
})
export class ToastService {
   private toast(message: string, background: string) {
      Toastify({
         text: message,
         duration: 4000,
         gravity: 'top',
         position: 'right',
         close: false,
         stopOnFocus: true,
         style: {
            background,
            padding: '18px',
            'border-radius': '4px',
            'box-shadow':
               '0 1px 10px 0 rgb(0, 0, 0, 0.1), 0 2px 15px 0 rgb(0, 0, 0, 0.05)',
         },
      }).showToast();
   }

   success(message: string) {
      this.toast(message, '#07bc0c');
   }

   error(message: string) {
      this.toast(message, '#e74c3c');
   }

   warning(message: string) {
      this.toast(message, '#f1c40f');
   }

   info(message: string) {
      this.toast(message, '#3498db');
   }
}
