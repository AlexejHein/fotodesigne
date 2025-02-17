import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  template: `
    <div class="dialog-container">
      <img [src]="data.imageSrc" alt="Vollansicht" class="full-image">
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 0;
      margin: 0;
      background: transparent;
    }

    .full-image {
      width: 100%;
      height: auto;
      display: block;
    }
  `],
  standalone: true
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageSrc: string }) { }
}
