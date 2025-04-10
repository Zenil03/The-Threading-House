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
    { name: 'Tammy peng', image: 'testimonials-1.jpg', review: 'Exceptional quality and efficiency! I recently moved to the area and was nervous about finding a new eyebrow threading place after going to the same person for over 10 years. I was thrilled to strike gold on my first try! For context, I have very thin Asian eyebrow hair, so I’m extremely particular—any mistakes are super noticeable and take forever to grow out. Fortunately, they knew exactly what they were doing. The process was quick (I was out in less than 10 minutes) with minimal waiting time. The pricing is reasonable, and the results exceeded my expectations. Highly recommend!' },
    { name: 'Anelle Camacho', image: 'testimonials-2.jpg', review: 'I’ve been following Mitali for many many years and she is the most professional and experienced service provider!! Not to mention she’s sweet as pie 🥹🫶🏼 She’ll work with your schedule and cares very much for her clients! There has never been a time I’ve been unhappy with her services and I don’t ever plan on going anywhere else!! ❤' },
    { name: 'Amaris Bermudez', image: 'testimonials-3.jpg', review: 'The Threading House is the best threading services around. Very good with their technique and quality of service. I only trust this team with my eyebrow and upper lip threading and tinting. The service is very reasonably priced and the shop is always well maintained, they put a lot of effort into decor, cleanliness and upkeep.' },
    { name: 'Sundus Shafqat', image: 'testimonials-4.jpg', review: 'Hands down the best eyebrow salon in West Loop. I’ve been coming here for the past three years and they always do right by me. Staff is sweet, accommodating and very gentle while threading my eyebrows' }
  ];
}
