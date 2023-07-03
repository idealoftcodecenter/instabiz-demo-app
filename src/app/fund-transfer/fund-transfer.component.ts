import { Component, OnInit, Inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  amount:any = "";
  items:any;
  remark:any;
  remark_other:any;
  anotherAccount:boolean = false;
  account:string = "XXXX XXXX XXXX 5117";
  checkBalance:boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.amount = 0;
    this.remark='';
    this.remark_other='';
    this.anotherAccount = false;
  }

  openAnotherAccount() {
    this.anotherAccount = true;
  }

  closeAnother() {
    this.anotherAccount = false;
  }

  setRemark(field:any) {
    this.remark = field.value;
  }

  updateAccount(val:string) {
    this.account = val;
    this.closeAnother();
  }

  onChangeValue(field: any) {
    if(this.isNumber(field.value)){
      field.value = Number(field.value).toLocaleString('en-IN');
      this.amount = field.value;
    }else {
      //field.value = '';
      this.amount = '';
      alert("Please enter valid number");
    }
  }

  amountChange(field:any) {
    var fieldVal = field.value;
    if(this.isNumber(fieldVal)) {
      this.amount = fieldVal;
    }
  }

  getActiveClass():string {
    return 'active';
  }

  onRadioChange(val:string) {
    this.remark = val;
  }

  isNumber(value?: string | number): boolean {
    return ((value != null) &&
      (value !== '') &&
      !isNaN(Number(value.toString())));
  }

  showBalance() {
    this.checkBalance = !this.checkBalance;
  }

  submitAmount():void {
    sessionStorage.setItem('amount', this.amount);
    sessionStorage.setItem('remark', this.remark);
    sessionStorage.setItem('remark_other', this.remark_other);
    sessionStorage.setItem('account', this.account);
    this.router.navigate(['/pay']);
  }

}
