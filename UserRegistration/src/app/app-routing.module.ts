import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { SuccessComponent } from './success/success.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'personalInfo', component: PersonalInformationComponent },
  { path: 'addressInfo', component: AddressInformationComponent },
  { path: 'paymentInfo', component: PaymentInformationComponent },
  { path: 'successPage', component: SuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
