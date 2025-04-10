import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  isSeeMore: boolean = false;

  onSeeMore() {
    this.isSeeMore = true;
  }
}
