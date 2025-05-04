// src/app/components/contact-form/contact-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Output() close = new EventEmitter<void>();
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const serviceID = 'service_vnad463'; // Replace with your EmailJS service ID
      const templateID = 'template_3ui51jp'; // Replace with your EmailJS template ID
      const userID = 'VkEBW7fqXbBO4pmeY'; // Replace with your EmailJS user ID

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        message: this.contactForm.value.message,
        service: this.contactForm.value.service,
        to_email: 'thethreadinghouse@gmail.com'
      };

      // Load EmailJS script
      this.loadEmailJSScript().then(() => {
        // Initialize EmailJS
        (window as any).emailjs.init(userID);

        // Send the email
        (window as any).emailjs.send(serviceID, templateID, templateParams)
          .then(() => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
            setTimeout(() => {
              this.closeForm();
            }, 3000);
          }, (error: any) => {
            this.isSubmitting = false;
            this.submitError = true;
            console.error('Email error:', error);
          });
      }).catch(error => {
        this.isSubmitting = false;
        this.submitError = true;
        console.error('Error loading EmailJS:', error);
      });
    }
  }

  loadEmailJSScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (e) => reject(e);
      document.body.appendChild(script);
    });
  }

  closeForm() {
    this.close.emit();
  }
}