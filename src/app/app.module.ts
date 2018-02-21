import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { FooterComponent } from './footer/footer.component';
import { HomemadeComponent } from './homemade/homemade.component';
import { GrubMobileComponent } from './grub-mobile/grub-mobile.component';
import { GrubBagComponent } from './grub-bag/grub-bag.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderComponent,
    GroceriesComponent,
    FooterComponent,
    HomemadeComponent,
    GrubMobileComponent,
    GrubBagComponent,
    BlogComponent,
    ContactComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    OrderOverviewComponent,
    PaymentComponent,
    OrderCompleteComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },{
        path: 'about-us',
        component: AboutUsComponent
      },{
        path: 'groceries',
        component: GroceriesComponent
      },{
        path: 'homemade',
        component: HomemadeComponent
      },{
        path: 'grub-mobile',
        component: GrubMobileComponent
      },{
        path: 'grub-bag',
        component: GrubBagComponent
      },{
        path: 'blog',
        component: BlogComponent
      },{
        path: 'contact',
        component: ContactComponent
      },{
        path: 'wishlist',
        component: WishlistComponent
      },{
        path: 'login',
        component: LoginComponent
      },{
        path: 'register',
        component: RegisterComponent
      },{
        path: 'checkout',
        component: CheckoutComponent
      },{
        path: 'cart',
        component: CartComponent,
      },{
        path: 'overview',
        component: OrderOverviewComponent
      },{
        path: 'payment',
        component: PaymentComponent
      },{
        path: 'order-complete',
        component: OrderCompleteComponent
      },{
        path: 'product-detail/:id',
        component: ProductDetailComponent
      }
    ])
  ],
  providers: [
    HttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
