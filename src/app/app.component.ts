import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from "./components/home-section/home-section.component";
import { NabBarComponent } from "./components/nab-bar/nab-bar.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesComponent } from "./components/services/services.component";
import { PackageComponent } from "./components/package/package.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeSectionComponent, NabBarComponent, AboutComponent, PackageComponent, GalleryComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo2';

}