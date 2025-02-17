import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // Beispielhafte Liste von Bildern
  images: string[] = [
    '/assets/img/1.jpg',
    '/assets/img/2.jpg',
    '/assets/img/A7R02159.jpg',
    '/assets/img/A7R02159.jpg',
    '/assets/img/A7R02209.jpg',
    '/assets/img/A7R02209.jpg',
    '/assets/img/A7R02209.jpg',
    '/assets/img/A7R02209.jpg',
    '/assets/img/A7R02209.jpg'
  ];

  constructor(private dialog: MatDialog) { }

  openDialog(imageSrc: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageSrc },
      panelClass: 'custom-dialog-container'
    });
  }
}
