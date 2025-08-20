import { Component } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {
//       document.addEventListener('DOMContentLoaded', () => {
//       const carouselInner = document.querySelector('.carousel-inner');
//       const indicators = document.querySelectorAll('.indicator');
//       const prevButton = document.querySelector('.arrow-button.prev');
//       const nextButton = document.querySelector('.arrow-button.next');
//       const totalSlides = document.querySelectorAll('.carousel-item').length;
//       let currentIndex = 0;

//       const updateCarousel = () => {
//         const offset = -currentIndex * 100;
//         carouselInner.style.transform = `translateX(${offset}%)`;
//         indicators.forEach((indicator, index) => {
//           if (index === currentIndex) {
//             indicator.classList.add('active');
//           } else {
//             indicator.classList.remove('active');
//           }
//         });
//       };

//       nextButton.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateCarousel();
//       });

//       prevButton.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateCarousel();
//       });

//       indicators.forEach((indicator, index) => {
//         indicator.addEventListener('click', () => {
//           currentIndex = index;
//           updateCarousel();
//         });
//       });
//     });

  currentIndex = 0;
  slides = [0, 1, 2, 3];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.scrollToSlide(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.scrollToSlide(this.currentIndex);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.scrollToSlide(this.currentIndex);
  }

  scrollToSlide(index: number) {
    const carousel = document.querySelector('.carousel-slide');
    const slideWidth = document.querySelector('.testimonial-card')?.clientWidth || 0;
    carousel?.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  }

}
