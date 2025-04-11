import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PackageItem {
  name: string;
  included: boolean;
  description?: string;
}

interface Package {
  id: number;
  name: string;
  items: PackageItem[];
  price?: string;
  popular?: boolean;
  description?: string;
}

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent {
  sectionTitle: string = 'Service Pricing';
  sectionSubtitle: string = 'Our Complete Service Collection';
  
  activeCategory: number = 1; // Default to show first category

  packages: Package[] = [
    {
      id: 1,
      name: 'Threading',
      items: [
        { name: 'Eyebrows', included: true, description: '$15' },
        { name: 'Upper Lip', included: true, description: '$10' },
        { name: 'Chin', included: true, description: '$10' },
        { name: 'Neck', included: true, description: '$10' },
        { name: 'Sides of Face', included: true, description: '$20' },
        { name: 'Cheek', included: true, description: '$15' },
        { name: 'Forehead', included: true, description: '$10' },
        { name: 'Full Face', included: true, description: '$55' }
      ],
      price: '',
      popular: false
    },
    {
      id: 2,
      name: 'Face Waxing',
      items: [
        { name: 'Eyebrow Wax', included: true, description: '$15' },
        { name: 'Upper Lip wax', included: true, description: '$10' },
        { name: 'Chin Wax', included: true, description: '$10' },
        { name: 'Neck Wax', included: true, description: '$12' },
        { name: 'Sides of Face Wax', included: true, description: '$20' },
        { name: 'Cheek Wax', included: true, description: '$15' },
        { name: 'Forehead Wax', included: true, description: '$12' },
        { name: 'Full Face Wax', included: true, description: '$60' },
        { name: 'Nose Wax', included: true, description: '$12' },
        { name: 'Nostril Wax', included: true, description: '$15' },
        { name: 'Ear Wax', included: true, description: '$15' },
        { name: 'Nape Wax', included: true, description: '$20' }
      ],
      price: ''
    },
    {
      id: 3,
      name: 'Body Waxing',
      items: [
        { name: 'Under Arms', included: true, description: '$20' },
        { name: 'Full Arms', included: true, description: '$40' },
        { name: 'Half Arms', included: true, description: '$35' },
        { name: 'Full Legs', included: true, description: '$60' },
        { name: 'Half Legs', included: true, description: '$45' },
        { name: 'Full Back', included: true, description: '$50' },
        { name: 'Half Back', included: true, description: '$35' },
        { name: 'Stomach', included: true, description: '$35' },
        { name: 'Bikini', included: true, description: '$35' },
        { name: 'French Bikini', included: true, description: '$45' },
        { name: 'Brazilian', included: true, description: '$60' },
        { name: 'Buttocks', included: true, description: '$30' },
        { name: 'Chest', included: true, description: '$30' },
        { name: 'Full Body', included: true, description: '$200' },
        { name: 'Full Body - Brazilian', included: true, description: '$240' }
      ],
      price: '',
      popular: false
    },
    {
      id: 4,
      name: 'Tinting',
      items: [
        { name: 'Eyebrow Tinting', included: true, description: '$20' },
        { name: 'Eyelash Tinting', included: true, description: '$25' },
        { name: 'Eyebrow + Tinting', included: true, description: '$30' }
      ],
      price: '',
      popular: false
    },
    {
      id: 5,
      name: 'Hair Massage with Oil',
      items: [
        { name: 'Men', included: true, description: '$25' },
        { name: 'Women', included: true, description: '$30' }
      ],
      price: ''
    },
    {
      id: 6,
      name: 'Facial',
      items: [
        { name: 'Mini Facial(30 min)', included: true, description: '$55' },
        { name: 'Deep Cleaning Facial(1 Hour)', included: true, description: '$80' },
        { name: 'Anti Agign Facial(1 Hour)', included: true, description: '$80' },
        { name: 'Golden Facial(1 Hour)', included: true, description: '$80' },
        { name: 'Acne Facial(1 Hour)', included: true, description: '$80' },
        { name: 'Back Facial(30 min)', included: true, description: '$50' }
      ],
      price: ''
    },
    {
      id: 7,
      name: 'Lash Lift',
      items: [
        { name: 'Lash Lift', included: true, description: '$65' },
        { name: 'Lash Lift + Eyelash Tinting', included: true, description: '$85' }
      ],
      price: ''
    },
    {
      id: 8,
      name: 'Henna Tattoo',
      items: [
        { name: 'Based On Consulatation', included: true }
      ],
      price: ''
    }
  ];
  
  // Set active category
  setActiveCategory(id: number): void {
    this.activeCategory = id;
  }
}