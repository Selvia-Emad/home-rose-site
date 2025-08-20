import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./pages/components/header/header.component";
import { HeroSectionComponent } from "./pages/components/hero-section/hero-section.component";
import { CategoriesComponent } from "./pages/components/categories/categories.component";
import { CategoryCardsComponentComponent } from "./pages/components/category-cards-component/category-cards-component.component";
import { PremiumGiftsComponent } from "./sections/premium-gifts/premium-gifts.component";
import { TopCategoriesBarComponent } from "./pages/components/top-categories-bar/top-categories-bar.component";
import { MainBannerComponent } from "./sections/main-banner/main-banner.component";
import { SmallBannersComponent } from "./sections/small-banners/small-banners.component";
import { ServicesBarComponent } from "./sections/services-bar/services-bar.component";
import { ProductListingComponent } from "./pages/components/product-listing.component/product-listing.component";
import { AboutUsComponent } from "./sections/about-us/about-us.component";
import { PhotoGalleryComponent } from "./sections/photo-gallery/photo-gallery.component";
import { TestimonialsCarouselComponent } from "./sections/testimonials-carousel/testimonials-carousel.component";
import { TrustedByComponent } from "./sections/trusted-by/trusted-by.component";
import { FooterComponent } from "./pages/components/footer/footer.component";
import { ProductsComponent } from "./pages/components/products/products.component";
import { Component } from "@angular/core";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    CategoriesComponent,
    CategoryCardsComponentComponent,
    PremiumGiftsComponent,
    TopCategoriesBarComponent,
    MainBannerComponent,
    SmallBannersComponent,
    ServicesBarComponent,
ProductListingComponent ,
AboutUsComponent ,
PhotoGalleryComponent ,
TestimonialsCarouselComponent , TrustedByComponent , FooterComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-rose-site';
}
