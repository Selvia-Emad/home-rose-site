import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // استيراد CommonModule

@Component({
  selector: 'app-product-card',
  standalone: true, // تأكدي أن المكون مستقل
  imports: [CommonModule], // أضيفي CommonModule هنا
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;

  filledStars: any[] = [];
  emptyStars: any[] = [];

  ngOnInit(): void {
    this.setRating(this.product.rating);
  }

  setRating(rating: number): void {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    this.filledStars = new Array(fullStars);
    this.emptyStars = new Array(emptyStars);
  }
}
