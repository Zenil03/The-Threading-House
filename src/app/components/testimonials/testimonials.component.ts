import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common'; // ✅ Import CommonModule for *ngFor

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  stars = Array(5); // Creates an array with 5 elements for stars

  testimonials = [
    { name: 'Minal', image: 'testimonials-1.jpg', review: 'Amazing salon experience! The staff is professional, the atmosphere is relaxing, and the service is top-notch. Left feeling refreshed and pampered. Highly recommend!' },
    { name: 'Dipesh', image: 'testimonials-2.jpg', review: 'Amazing salon experience! The staff is professional, the atmosphere is relaxing, and the service is top-notch. Left feeling refreshed and pampered. Highly recommend!' },
    { name: 'Monish', image: 'testimonials-3.jpg', review: 'Amazing salon experience! The staff is professional, the atmosphere is relaxing, and the service is top-notch.' },
    { name: 'Jesal', image: 'testimonials-4.jpg', review: 'Amazing salon experience! The staff is professional, the atmosphere is relaxing, and the service is top-notch. Left feeling refreshed and pampered. Highly recommend!' }
  ];
}
