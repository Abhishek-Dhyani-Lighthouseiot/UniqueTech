import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FrameComponent } from './Components/Body/frame/frame.component';
import { ServicesComponent } from './Components/Body/services/services.component';
import { ContactsComponent } from './Components/Body/contacts/contacts.component';
import { BodyComponent } from './Components/Body/body.component';
import { NavComponent } from './Components/Body/nav/nav.component';
import { ProductsComponent } from './Components/Body/products/products.component';


//NgPrimemodule
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { PricingComponent } from './Components/Body/pricing/pricing.component';
import { DialogModule } from 'primeng/dialog';
import { GetContactModalComponent } from './Components/Body/UiModal/get-contact-modal/get-contact-modal.component';
import { WriteToUsModalComponent } from './Components/Body/UiModal/write-to-us-modal/write-to-us-modal.component';


import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FrameComponent,
    ServicesComponent,
    ContactsComponent,
    BodyComponent,
    NavComponent,
    ProductsComponent,
    PricingComponent,
    GetContactModalComponent,
    WriteToUsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    AnimateOnScrollModule,
    DialogModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
