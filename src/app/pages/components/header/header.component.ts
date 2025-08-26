
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
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from "../../../sections/about-us/about-us.component";
import { AuthPopupComponent } from "../../../sections/auth-popup/auth-popup.component";

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    LoginComponent,
    FormsModule,
    AboutUsComponent,
    AuthPopupComponent
],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   sidebarVisible: boolean = false;
  loginOpen = false;

  openLogin() {
    this.loginOpen = true;
  }

  closeLogin() {
    this.loginOpen = false;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
