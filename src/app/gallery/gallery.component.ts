import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgForOf } from '@angular/common';
import {ImageDialogComponent} from '../image-dialog/image-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatTabGroup, MatTab, NgForOf],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  // Wir definieren die Kategorien mit zugehörigen Bildern.
  // (Statische Pfade – später ersetzt du diese durch dynamische Daten aus deinem Backend.)
  categories = [
    { name: 'Mosel', images: ['/assets/img/A7R02265 Kopie.jpg', '/assets/img/2.jpg'] },
    { name: 'Eifel', images: ['/assets/img/A7R02159 Kopie.jpg', '/assets/img/2.jpg'] },
    { name: 'Hunsrück', images: ['/assets/img/1.jpg', '/assets/img/2.jpg'] },
    { name: 'Deutschland', images: ['/assets/img/A7R02277-Verbessert-RR Kopie.jpg', '/assets/img/2.jpg'] },
    { name: 'Architektur', images: ['/assets/img/A7R02136-Verbessert-RR Kopie.jpg', '/assets/img/2.jpg'] }
  ];

  selectedTabIndex = 0;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
    // Lies den Kategorienamen aus dem Query-Parameter und suche den entsprechenden Tab.
    const categoryParam = this.route.snapshot.queryParamMap.get('category');
    if (categoryParam) {
      const index = this.categories.findIndex(c =>
        c.name.toLowerCase() === categoryParam.toLowerCase());
      if (index >= 0) {
        this.selectedTabIndex = index;
      }
    }
  }
  openDialog(imageSrc: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: {imageSrc},
      panelClass: 'custom-dialog-container'
    });
  }
}
