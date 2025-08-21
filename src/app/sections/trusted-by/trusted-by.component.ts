// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-trusted-by',
//   imports: [],
//   templateUrl: './trusted-by.component.html',
//   styleUrl: './trusted-by.component.scss'
// })
// export class TrustedByComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trusted-by',
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselModule]
})
export class TrustedByComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      992: {
        items: 6
      }
    },
    nav: false // لا يوجد أسهم في هذا التصميم
  };

  logos = [
    { src: '../../../assets/images/logo-1.png', alt: 'Company Logo 1' },
    { src: '../../../assets/images/logo-2.png', alt: 'Company Logo 2' },
    { src: '../../../assets/images/logo-3.png', alt: 'Company Logo 3' },
    { src: '../../../assets/images/logo-4.png', alt: 'Company Logo 4' },
    { src: '../../../assets/images/logo-5.png', alt: 'Company Logo 5' },
    { src: '../../../assets/images/logo-6.png', alt: 'Company Logo 6' }
  ];
}
