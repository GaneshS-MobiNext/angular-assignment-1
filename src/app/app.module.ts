import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentTdComponent } from './student-td/student-td.component';
import { TableSearchPipe } from './table-search.pipe';
import { SearchPipe } from './search.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    StudentTdComponent,
    TableSearchPipe,
    SearchPipe,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'home', component: HomeComponent},
        {path: 'products', component: ProductsComponent},
        {path: 'services', component: ServicesComponent},
        {path: 'about', component: AboutUsComponent},
        {path: 'contact', component: ContactUsComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: '**', component: PageNotFoundComponent}
    ]),
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
