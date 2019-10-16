import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FooterComponent } from './footer/footer.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mens', component: MenComponent },
    { path: 'womens', component: WomenComponent },
    { path: 'laptops', component: LaptopComponent },
    { path: 'mobiles', component: MobilesComponent },
    { path: 'view', component: ProductSingleComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, FooterComponent,
    WomenComponent, NavbarComponent, MenComponent,
    MobilesComponent, LaptopComponent];
