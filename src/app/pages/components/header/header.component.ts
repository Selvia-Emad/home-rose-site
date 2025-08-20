
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهمة لإظهار ngIf و ngFor


@Component({
  selector: 'app-header',
  standalone: true, // تأكد من أن هذا صحيح
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 

}
