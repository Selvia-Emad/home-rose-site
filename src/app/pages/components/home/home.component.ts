import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoryCardsComponentComponent } from '../category-cards-component/category-cards-component.component';
import { PremiumGiftsComponent } from '../../../sections/premium-gifts/premium-gifts.component';
import { TopCategoriesBarComponent } from '../top-categories-bar/top-categories-bar.component';
import { MainBannerComponent } from '../../../sections/main-banner/main-banner.component';
import { SmallBannersComponent } from '../../../sections/small-banners/small-banners.component';
import { ServicesBarComponent } from '../../../sections/services-bar/services-bar.component';
import { ProductListingComponent } from '../product-listing.component/product-listing.component';
import { AboutUsComponent } from '../../../sections/about-us/about-us.component';
import { PhotoGalleryComponent } from '../../../sections/photo-gallery/photo-gallery.component';
import { TestimonialsComponent } from '../../../sections/testimonials-carousel/testimonials-carousel.component';
import { TrustedByComponent } from '../../../sections/trusted-by/trusted-by.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { CreateAccountComponent } from '../create-account/create-acount.component';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';
import { SetPasswordComponent } from "../set-password/set-password.component";

@Component({
  selector: 'app-home',
  imports: [
    MatSlideToggleModule,
    CarouselModule,
    // RouterOutlet,
    HeaderComponent,
    // HeroSectionComponent,
    // CategoriesComponent,
    // CategoryCardsComponentComponent,
    // PremiumGiftsComponent,
    TopCategoriesBarComponent,
    MainBannerComponent,
    SmallBannersComponent,
    ServicesBarComponent,
    ProductListingComponent,
    AboutUsComponent,
    PhotoGalleryComponent,
    TestimonialsComponent, TrustedByComponent, FooterComponent, ProductsComponent,
    LoginComponent,
    CreateAccountComponent,
    ForgetPasswordComponent,
    VerifyCodeComponent,
    SetPasswordComponent
],  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
