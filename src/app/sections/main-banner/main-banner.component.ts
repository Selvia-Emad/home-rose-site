// //
// import { Component } from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

// import { CarouselModule } from 'ngx-owl-carousel-o'; // Add this line

// @Component({
//   selector: 'app-main-banner',
//     imports: [CarouselModule],
//   templateUrl: './main-banner.component.html',
//   styleUrl: './main-banner.component.scss'
// })
// export class MainBannerComponent {

//   customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: true,
//     touchDrag: true,
//     pullDrag: true,
//     dots: true,
//     navSpeed: 700,
//     navText: ['<', '>'], // Leave this empty as we'll use CSS for arrows
//     responsive: {
//       0: {
//         items: 1
//       },
//       768: {
//         items: 1
//       },
//       992: {
//         items: 1
//       }
//     },
//     nav: true
//   };

//   slides = [
//     {
//       subtitle: 'BEST GIFT SHOP',
//       title: 'Choose Perfect<br><span class="gifts-text">Gifts</span> From Us',
//       description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.'
//     },
//     {
//       subtitle: 'Another Gift',
//       title: 'Something New<br><span class="gifts-text">From</span> Us',
//       description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.'
//     },
//     {
//       subtitle: 'Seasonal Special',
//       title: 'Unique Gifts<br><span class="gifts-text">For</span> Any Occasion',
//       description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.'
//     }
//   ];
// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
  standalone: true, // اجعل المكون standalone
  imports: [CarouselModule, CommonModule ,CarouselModule] // أضف المكتبة هنا
})
export class MainBannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true, // تفعيل المؤشرات (النقاط)
    navSpeed: 700,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'], // أيقونات SVG للأسهم
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true // تفعيل أزرار التنقل (الأسهم)
  };

  slides = [
    {
      subtitle: 'BEST GIFT SHOP',
      title: 'Choose Perfect<br><span class="gifts-text">Gifts</span> From Us',
      description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.',
      imageUrl: 'url("../../../assets/images/banner-right.jpg")'
    },
    {
      subtitle: 'BEST GIFT SHOP',
      title: 'Choose Perfect<br><span class="gifts-text">Gifts</span> From Us',
      description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.',
      imageUrl: 'url("../../../assets/images/banner-right.jpg")'
    },
    {
      subtitle: 'BEST GIFT SHOP',
      title: 'Choose Perfect<br><span class="gifts-text">Gifts</span> From Us',
      description: 'Culpa ducimus nesciunt aliquam non rerum<br> esse recusandae omnis. Rerum optio dolores<br> et.',
      imageUrl: 'url("../../../assets/images/banner-right.jpg")'
    }
  ];
}
