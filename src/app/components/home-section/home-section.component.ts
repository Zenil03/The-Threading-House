import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home-section',
  imports: [ContactFormComponent],
  standalone: true,
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  showContactForm = false;

  openContactForm() {
    this.showContactForm = true;
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeContactForm() {
    this.showContactForm = false;
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  }
}
