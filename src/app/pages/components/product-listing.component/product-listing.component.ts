// import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-listing',
//   standalone: true, // تأكد من وجود standalone: true إذا كنت تستخدم Angular 14+
//   imports: [],
//   templateUrl: './product-listing.component.html',
//   styleUrl: './product-listing.component.scss'
// })
// export class ProductListingComponent implements OnInit {

//   @ViewChild('productsList') productsList!: ElementRef<HTMLDivElement>;

//   currentIndex = 0;

//   slides = [0, 1, 2, 3];

//   ngOnInit() {
//   }

//   nextSlide() {
//     const totalSlides = this.productsList.nativeElement.children.length;
//     this.currentIndex = (this.currentIndex + 1) % totalSlides;
//     this.scrollToSlide(this.currentIndex);
//   }

//   prevSlide() {
//     const totalSlides = this.productsList.nativeElement.children.length;
//     this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
//     this.scrollToSlide(this.currentIndex);
//   }

//   goToSlide(index: number) {
//     this.currentIndex = index;
//     this.scrollToSlide(this.currentIndex);
//   }

//   scrollToSlide(index: number) {
//     const productsListElement = this.productsList.nativeElement;
//     const productCardElement = productsListElement.querySelector('.product-card');

//     if (productsListElement && productCardElement) {
//       const cardWidth = productCardElement.clientWidth;
//       const gap = 24;
//       const scrollAmount = cardWidth + gap;

//       productsListElement.scrollTo({
//         left: scrollAmount * index,
//         behavior: 'smooth'
//       });
//     }
//   }
// }
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  // تأكد من إضافة CarouselModule في الـ imports
  imports: [CarouselModule ,CommonModule],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true // عرض الأسهم
  };

  slides = [
    { id: '1', product: 'product-1.png', badge: 'NEW', name: 'Special Gift Box', price: '$250.00', oldPrice: '$350.00', rating: 5 },
    { id: '2', product: 'product-2.png', badge: 'OUT OF STOCK', name: 'Special Gift Box', price: '$250.00', oldPrice: null, rating: 5 },
    { id: '3', product: 'product-3.png', badge: 'HOT', name: 'Exclusive Gift', price: '$300.00', oldPrice: null, rating: 4 },
    { id: '4', product: 'product-1.png', badge: 'NEW', name: 'Special Gift Box', price: '$250.00', oldPrice: '$350.00', rating: 5 },
    { id: '5', product: 'product-2.png', badge: 'OUT OF STOCK', name: 'Special Gift Box', price: '$250.00', oldPrice: null, rating: 5 },
    { id: '6', product: 'product-3.png', badge: 'HOT', name: 'Exclusive Gift', price: '$300.00', oldPrice: null, rating: 4 },
  ];

  constructor() { }

  ngOnInit() { }
}
