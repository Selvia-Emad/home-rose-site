import { DialogModule } from 'primeng/dialog';

import { Component } from "@angular/core";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';

import { HomeComponent } from './pages/components/home/home.component';



@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    CarouselModule,
    // RouterOutlet,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


// constructor(private DialogModule: MatDialog) {}


}


//  customOptions: OwlOptions = {
//     loop: true,
//     mouseDrag: false,
//     touchDrag: false,
//     pullDrag: false,
//     dots: true,
//     navSpeed: 700,
//     navText: ['', ''],
//     responsive: {
//       0: {
//         items: 1
//       },
//       400: {
//         items: 2
//       },
//       740: {
//         items: 3
//       },
//       940: {
//         items: 4
//       }
//     },
//     nav: true
//   }
