import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  standalone: true, // تأكد من وجود standalone: true إذا كنت تستخدم Angular 14+
  imports: [],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent implements OnInit {

  @ViewChild('productsList') productsList!: ElementRef<HTMLDivElement>;

  currentIndex = 0;

  slides = [0, 1, 2, 3];

  ngOnInit() {
  }

  nextSlide() {
    const totalSlides = this.productsList.nativeElement.children.length;
    this.currentIndex = (this.currentIndex + 1) % totalSlides;
    this.scrollToSlide(this.currentIndex);
  }

  prevSlide() {
    const totalSlides = this.productsList.nativeElement.children.length;
    this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
    this.scrollToSlide(this.currentIndex);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.scrollToSlide(this.currentIndex);
  }

  scrollToSlide(index: number) {
    const productsListElement = this.productsList.nativeElement;
    const productCardElement = productsListElement.querySelector('.product-card');

    if (productsListElement && productCardElement) {
      const cardWidth = productCardElement.clientWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      productsListElement.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth'
      });
    }
  }
}
