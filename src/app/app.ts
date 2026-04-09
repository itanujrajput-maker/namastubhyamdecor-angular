import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailService } from '../Component/services/enquiry';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('namastubhyam-decor');
isScrolled = false;


constructor(
  private enquiryService: EmailService,
  private meta: Meta,
  private pageTitle: Title   // ✅ different name
) {}

heroImages = [
  '/images/kitchen.jpg',
  '/images/glass.jpg',
  '/images/pvc.jpg',
  '/images/wooden44.jpg'
];

currentImage = this.heroImages[0];
index = 0;

ngOnInit() {

  // ✅ SEO TITLE
 this.pageTitle.setTitle('Best PVC Panel & Interior Designer in Meerut | Namastubhyam Decor');
 
  // ✅ SEO META TAGS
  this.meta.addTags([
    {
      name: 'description',
      content: 'Namastubhyam Decor provides best PVC panels, wall design and interior services in Meerut. Visit us at J.P Plaza, Baghpat Road, Meerut.'
    },
    {
      name: 'keywords',
      content: 'PVC panel Meerut, Interior designer Meerut, wall panel Meerut, home decor Meerut, Namastubhyam Decor'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]);

  // ✅ Your existing code (DON'T REMOVE)
  setInterval(() => {
    this.index = (this.index + 1) % this.heroImages.length;
    this.currentImage = this.heroImages[this.index];
  }, 4000);

  window.addEventListener('scroll', () => {
    this.isScrolled = window.scrollY > 50;
  });
}
selectedImage: string | null = null;

openImage(img: string) {
  this.selectedImage = img;
}

closeImage() {
  this.selectedImage = null;
}
activeTab = 'all';
  
  // Lead Model matching your .NET parameters
  lead = { Name: '', Email: '', Mobile: '', Service: '', Message: '' };

  // Services exactly as per your business card
services = [
  { title: 'Modular Interiors', icon: 'fa-solid fa-couch', image: '/images/kitchen.jpg' },
  { title: 'Glass Work', icon: 'fa-solid fa-window-maximize', image: '/images/glass.jpg' },
  { title: 'PVC Panels & Ceiling', icon: 'fa-solid fa-table-cells', image: '/images/pvc.jpg' },
  { title: 'Louver & Fluted Panels', icon: 'fa-solid fa-bars', image: '/images/pvc55.jpg' },
  { title: 'Wooden Flooring', icon: 'fa-solid fa-rug', image: '/images/wooden44.jpg' },
  { title: 'Vertical Garden', icon: 'fa-solid fa-leaf', image: '/images/pvc77.jpg' },
  { title: 'UV Marble Sheet', icon: 'fa-solid fa-gem', image: '/images/pvc.jpg' },
  { title: 'Window Blinds', icon: 'fa-solid fa-window-columns', image: '/images/kitchen11.jpg' }
];


selectedCategory: string = 'all';

  // Centralized gallery data
galleryItems = [
  // --- DINING & KITCHEN ---
  { 
    category: 'dining', 
    src: '/images/pvc77.jpg', 
    caption: 'Classic contemporary dining room with round dining table and walnut bar unit with glass front display' 
  },
  { 
    category: 'dining', 
    src: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800', 
    caption: 'Indian modern dining room with round back cane dining chairs and arched wallpaper niches' 
  },
  { 
    category: 'kitchen', 
    src: '/images/pvc.jpg', 
    caption: 'Premium Modular Kitchen featuring seamless cabinetry and high-end glass work finishes' 
  },

  // --- WALLS & CEILINGS (PVC, Louver, Wallpaper) ---
  { 
    category: 'living', 
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800', 
    caption: 'Modern living room featuring vertical louver panels and customized 3D wallpaper' 
  },
  { 
    category: 'living', 
    src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800', 
    caption: 'Luxury accent wall featuring UV Marble Sheets and integrated LED profile lighting' 
  },

  // --- FLOORING & EXTERIOR (Wooden, Grass, Garden) ---
  { 
    category: 'bedroom', 
    src: '/images/glass.jpg', 
    caption: 'Premium Wooden Flooring with natural oak finish and modern skirting' 
  },
  { 
    category: 'living', 
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800', 
    caption: 'Balcony transformation featuring Vertical Garden walls and synthetic Green Grass' 
  },
  { 
    category: 'bedroom', 
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800', 
    caption: 'Master bedroom with motorized Window Blinds and 3D textured wall panels' 
  }
,
  { category: 'bedroom', src: '/images/wooden44.jpg', caption: 'Natural Oak Finish Floor' },

  // PVC Panels (Louver & Wall)
  { category: 'living', src: '/images/pvc77.jpg', caption: 'Modern PVC Wall Panel' },
  { category: 'living', src: '/images/wooden444.jpg', caption: 'Louver Panel Design' },

  // Kitchen
  { category: 'kitchen', src: '/images/kitchen11.jpg', caption: 'Modular Kitchen Layout' },
  { category: 'kitchen', src: '/images/kitchen.jpg', caption: 'Modern Cabinetry' },

  // Glass Work
 
];

  get filteredItems() {
  if (this.selectedCategory === 'all') {
    return this.galleryItems;
  }
  return this.galleryItems.filter(
    item => item.category === this.selectedCategory
  );
}
selectCategory(category: string) {
  this.selectedCategory = category;
}


  setTab(tab: string) { this.activeTab = tab; }

 formData = {
  name: '',
  email: '',
  mobile: '',
  service: '',
  message: ''
};

submitForm() {
  this.enquiryService.sendEmail(this.formData).subscribe({
    next: () => alert('Email Sent Successfully'),
    error: () => alert('Error sending email')
  });
}
  
}
