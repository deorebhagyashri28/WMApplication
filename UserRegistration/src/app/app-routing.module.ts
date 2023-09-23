import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { PaymentInformationComponent } from './payment-information/payment-information.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/personalInfo', pathMatch: 'full' },
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
