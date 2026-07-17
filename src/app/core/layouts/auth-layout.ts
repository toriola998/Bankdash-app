import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface AuthCta {
   prompt: string;
   text: string;
   link: string;
}

@Component({
   selector: 'auth-layout',
   imports: [RouterLink],
   standalone: true,
   template: `
      <main
         class="hero-banner flex justify-center items-center p-4 bg-blend-darken">
         <div
            class="w-full bg-white rounded-xl p-4 sm:p-6 md:pb-10 md:w-[550px] mx-auto">
            <h1 class="text-center font-semibold text-2xl md:text-3xl ">
               {{ title() }}
            </h1>
            <p class="mt-2 text-sm text-gray-700 mb-10 text-center">
               Enter your credential to resume activities
            </p>
            <ng-content></ng-content>

            <p class="text-sm text-center mt-5">
               {{ cta().prompt }}
               <a [routerLink]="cta().link" class="underline font-medium">
                  {{ cta().text }}
               </a>
            </p>
         </div>
      </main>
   `,

   styles: `
      .hero-banner {
         min-height: 100vh;
         width: 100%;
         background-image: url('/images/red-hijab.jpg');
         background-repeat: no-repeat;
         background-position: center;
         background-size: cover;
         background-attachment: fixed;
         background-color: #c3c3c3;
      }
   `,
})
export class AuthLayout {
   title = input<string>('');

   cta = input<AuthCta>({
      prompt: "Don't have an account?",
      text: 'Sign up',
      link: '/',
   });
}
