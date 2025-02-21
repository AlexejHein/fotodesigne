import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image_url: string;
  uploaded_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  // Passe die URL an deine Django-API an
  private apiUrl = 'http://localhost:8000/api/gallery/';

  constructor(private http: HttpClient) { }

  // Optional: Kategorie als Parameter übergeben, um gefilterte Daten zu erhalten
  getImages(category?: string): Observable<GalleryImage[]> {
    let url = this.apiUrl;
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }
    return this.http.get<GalleryImage[]>(url);
  }
}

