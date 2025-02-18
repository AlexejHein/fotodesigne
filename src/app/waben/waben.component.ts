import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-waben',
  standalone: false,
  templateUrl: './waben.component.html',
  styleUrl: './waben.component.css'
})
export class WabenComponent {

  constructor(private router: Router) { }

  goToGallery(category: string): void {
    // Navigiere zur Gallery-Seite und übergebe den Kategorienamen als Query-Parameter
    this.router.navigate(['/gallery'], {queryParams: {category}}).then(r => console.log(r));
   }
}
