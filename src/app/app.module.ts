import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WabenComponent } from './waben/waben.component';
import {NgOptimizedImage} from "@angular/common";
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    FooterComponent,
    WabenComponent,
    ImpressumComponent,
    DatenschutzComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
