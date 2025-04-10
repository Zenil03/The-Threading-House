import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  sectionTitle: string = 'Services';
  sectionSubtitle: string = 'What we do';
  isInViewport: boolean = false;
  private observer: IntersectionObserver | null = null;

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('packageSection') packageSection!: ElementRef;

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

  // Add this function for trackBy
  trackById(index: number, item: Service): number {
    return item.id;
  }

  ngAfterViewInit() {
    // Set up intersection observer to track when the section is visible
    this.observer = new IntersectionObserver(
      (entries) => {
        this.isInViewport = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    if (this.aboutSection) {
      this.observer.observe(this.aboutSection.nativeElement);
    }
  }

  ngOnDestroy() {
    // Clean up observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  scrollToPackage() {
    if (this.packageSection) {
      this.packageSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}