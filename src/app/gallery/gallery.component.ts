import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { NgForOf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { GalleryService, GalleryImage } from '../services/gallery.service.service';

interface CategoryGroup {
  name: string;
  images: GalleryImage[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatTabGroup, MatTab, NgForOf],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // Wir gruppieren die Bilder nach Kategorien
  categories: CategoryGroup[] = [];
  selectedTabIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    // Lies den optionalen Query-Parameter "category" (z. B. aus der URL ?category=Mosel)
    const categoryParam = this.route.snapshot.queryParamMap.get('category');

    // Lade die Bilder vom Backend
    this.galleryService.getImages().subscribe({
      next: (images: GalleryImage[]) => {
        this.categories = this.groupImagesByCategory(images);
        if (categoryParam) {
          const index = this.categories.findIndex(c =>
            c.name.toLowerCase() === categoryParam.toLowerCase()
          );
          if (index >= 0) {
            this.selectedTabIndex = index;
          }
        }
      },
      error: (err) => console.error(err)
    });
  }

  groupImagesByCategory(images: GalleryImage[]): CategoryGroup[] {
    const groups: { [key: string]: GalleryImage[] } = {};
    images.forEach(img => {
      const cat = img.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(img);
    });
    // Konvertiere das Objekt in ein Array von CategoryGroup
    return Object.keys(groups).map(key => ({ name: key, images: groups[key] }));
  }

  openDialog(imageSrc: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageSrc },
      panelClass: 'custom-dialog-container'
    });
  }
}
