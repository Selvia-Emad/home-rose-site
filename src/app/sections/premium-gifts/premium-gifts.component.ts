import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهمة جداً لـ *ngFor
import { ProductCardComponent } from '../../components/product-card/product-card.component'; // مسار المكون

@Component({
  selector: 'app-premium-gifts',
  standalone: true,
  imports: [
    CommonModule, // يجب استيرادها عشان نستخدم *ngFor
    ProductCardComponent // استيراد المكون اللي بنستخدمه في الـ HTML
  ],
  templateUrl: './premium-gifts.component.html',
  styleUrls: ['./premium-gifts.component.scss']
})
export class PremiumGiftsComponent implements OnInit {

  premiumProducts: any[] = [
    {
      id: 1,
      name: 'Special Gift Box',
      price: 250.00,
      rating: 4,
      imageUrl: 'assets/images/product1.jpg' // تأكدي من المسار ده
    },
    {
      id: 2,
      name: 'Special Gift Box',
      price: 280.00,
      rating: 5,
      imageUrl: 'assets/images/product2.jpg'
    },
    // أضيفي باقي المنتجات هنا
  ];

  ngOnInit(): void { }
}
