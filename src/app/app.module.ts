import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { OnlyNumberDirective } from './utils/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    FundTransferComponent,
    PaymentComponent,
    OnlyNumberDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
