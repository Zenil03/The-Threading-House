import { Component } from '@angular/core';

@Component({
  selector: 'app-nab-bar',
  standalone: true,
  templateUrl: './nab-bar.component.html',
  styleUrl: './nab-bar.component.css'
})
export class NabBarComponent {
  showNav: boolean = false;
  activeIndex: number = 0;

  toggleNav(): void {
    this.showNav = !this.showNav;
  }

  setActiveLink(index: number): void {
    this.activeIndex = index;
    this.showNav = false;
  }

  scrollToSection(sectionId: string, index: number): void {
    this.setActiveLink(index);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
