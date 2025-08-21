
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // مهمة لإظهار ngIf و ngFor


// @Component({
//   selector: 'app-header',
//   standalone: true, // تأكد من أن هذا صحيح
//   imports: [
//     CommonModule,
//   ],
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent {


// }

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog'; // ✅ هذا هو الموديول الصحيح

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
