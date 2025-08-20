import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    { name: 'Gifts Box', items: 20, icon: 'assets/icons/gift-box.svg' },
    { name: 'Home & Living Gifts', items: 15, icon: 'assets/icons/home.svg' },
    { name: 'Jewelry & Accessories', items: 30, icon: 'assets/icons/jewelry.svg' },
    { name: 'Curated Gifts', items: 10, icon: 'assets/icons/curated.svg' },
    { name: 'Office & Stationery', items: 25, icon: 'assets/icons/office.svg' },
  ];
}
