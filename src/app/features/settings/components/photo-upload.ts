import { Component, signal } from '@angular/core';

@Component({
   selector: 'app-photo-upload',
   template: `
      <div class="relative img-height mb-5">
         <input
            type="file"
            (change)="onFileSelected($event)"
            #fileInput
            hidden />
         <div class="bg-grey-9 img-height flex-center">
            <img src="/icons/icon-camera.svg" alt="" width="45" />
            <button
               (click)="fileInput.click()"
               class="w-7.5 h-7.5 rounded-full flex-center bg-blue-5 absolute bottom-4 right-0 z-50">
               <img src="/icons/icon-pencil-alt.svg" alt="" />
            </button>
         </div>

         @if (imagePreview()) {
            <img
               [src]="imagePreview()"
               class="img-height border border-grey-9 absolute top-0 right-0 object-cover" />
            <!-- <button (click)="onUpload()">Upload</button> -->
         }
      </div>
   `,
   styles: `
      .img-height {
         height: 132px;
         width: 130px;
         border-radius: 100%;
      }
   `,
})
export class PhotoUpload {
   selectedFile = signal<File | null>(null);
   imagePreview = signal<string | null>(null);

   onFileSelected(event: Event): void {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
         this.selectedFile.set(file);
         const reader = new FileReader();
         reader.onload = () => this.imagePreview.set(reader.result as string);
         reader.readAsDataURL(file);
      }
   }

   onUpload(): void {
      const file = this.selectedFile();
      if (!file) return;
      const formData = new FormData();
      formData.append('photo', file, file.name);
   }
}
