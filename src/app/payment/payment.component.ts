import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount:any = "";
  remark:any;
  remark_other:any;
  account:string = "XXXX XXXX XXXX 5117";
  transferDate:Date;
  method:string = "";
  methodFeature:string = "";

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.transferDate = new Date();
    this.amount = sessionStorage.getItem('amount') || "";
    this.account = sessionStorage.getItem('account') || "";
    if(!this.amount || !this.account) {
      this.router.navigate(['/']);
    }
    var amount = this.amount.replaceAll(',', "");
    
    if(amount < 500000) {
      this.method = 'imps';
      this.methodFeature = "(instant)";
    } else if(amount > 200000 && amount < 2500000) {
      this.method = 'neft';
    } else if(amount > 200000) {
      this.method = 'rtgs';
    } else {
      this.method = 'imps'
    }
    var remark = sessionStorage.getItem('remark')
    this.remark = remark ? remark: "";
    if(remark && remark == 'Others') {
      this.remark_other = sessionStorage.getItem('remark') || "";
    }
  }

}
