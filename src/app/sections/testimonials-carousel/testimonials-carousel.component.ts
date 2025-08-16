import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials-carousel',
  imports: [],
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.scss'
})
export class TestimonialsCarouselComponent {
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
