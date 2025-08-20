import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-carousel',
  // Assuming this is a standalone component, which is a modern Angular practice
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-carousel.component.html',
  styleUrl: './testimonials-carousel.component.scss'
})
export class TestimonialsCarouselComponent implements AfterViewInit {
  // Use @ViewChild to get a reference to the carousel slide element from the template.
  // This is the correct way to access DOM elements in Angular.
  @ViewChild('carouselSlide') carouselRef!: ElementRef<HTMLElement>;

  // State for the current active slide, starting at the first one.
  currentIndex = 0;

  // A simple array to control the indicators. This should match the number of testimonial cards.
  slides = [0, 1, 2, 3];

  // AfterViewInit hook ensures the DOM elements are available before we try to access them.
  ngAfterViewInit(): void {
    // You can add logic here if you want to perform an initial scroll or check.
  }

  // Function to move to the next slide.
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.scrollToSlide(this.currentIndex);
  }

  // Function to move to the previous slide.
  prevSlide(): void {
    // We add slides.length before modulo to ensure the result is always non-negative.
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.scrollToSlide(this.currentIndex);
  }

  // Function to jump to a specific slide, used by the indicators.
  goToSlide(index: number): void {
    this.currentIndex = index;
    this.scrollToSlide(this.currentIndex);
  }

  // A helper function to handle the actual scrolling.
  private scrollToSlide(index: number): void {
    // Ensure the carousel element and its children exist to prevent errors.
    if (this.carouselRef?.nativeElement && this.carouselRef.nativeElement.children.length > 0) {
      // Get the first card to calculate its width and the gap.
      const cardElement = this.carouselRef.nativeElement.children[0] as HTMLElement;
      const gap = 20; // This should match the CSS `gap` property.

      // Calculate the scroll position based on the card width and index.
      const scrollPosition = (cardElement.offsetWidth + gap) * index;

      this.carouselRef.nativeElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
}
