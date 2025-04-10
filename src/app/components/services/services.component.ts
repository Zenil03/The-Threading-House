import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  name: string;
  icon: string;
  description?: string;
  price?: string;
  duration?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  sectionTitle: string = 'Services';
  sectionSubtitle: string = 'What we do';

  @ViewChild('packageSection') packageSection!: ElementRef; // Reference to the package section

  services: Service[] = [
    { id: 1, name: 'Threading', icon: 'eyebrow.png' },
    { id: 2, name: 'Hair Massage', icon: 'hairmsg.png' },
    { id: 3, name: 'Eyelashes', icon: 'eyelashes.png' },
    { id: 4, name: 'Eyebrow Tinting', icon: 'eyetin.png' },
    { id: 5, name: 'Leg Wax', icon: 'legwax.png' },
    { id: 6, name: 'Facial', icon: 'facial.png' },
    { id: 7, name: 'Face Waxing', icon: 'facewax.png' },
    { id: 8, name: 'Henna Tattoo', icon: 'tattoo.png' }
  ];

  scrollToPackage() {
    if (this.packageSection) {
      this.packageSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
