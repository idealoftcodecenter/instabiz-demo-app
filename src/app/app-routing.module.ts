import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';


const routes: Routes = [
  {path: '', component:  FundTransferComponent},
  {path: 'pay', component:  PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
