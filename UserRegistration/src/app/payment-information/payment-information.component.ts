import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallServiceService } from '../Services/http-call-service.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent {
  postData: any; 
  constructor(private router: Router,public userDataService: HttpCallServiceService){
  }

  ngOnInit():void{
    if(localStorage.getItem('formStage2Data'))
    {
      console.log("formStage1Data stage 2:",localStorage.getItem('formStage2Data'));
    }  

  }

  paymentData = new FormGroup({
    accOwner: new FormControl('', Validators.required),
    iban : new FormControl('', Validators.required)
  })

 
  submit()
  {
    localStorage.setItem('formStage3Data', JSON.stringify(this.paymentData.value));    

    this.postData = {
      "customerId":new Date().getTime().toString(),
      "iban":this.paymentData.value.iban,
      "owner":this.paymentData.value.accOwner
      }
    console.log("  this.postData:",  this.postData);
 
        this.userDataService.saveUser(this.postData).subscribe((response: any) => {
          console.log("response:",response);
        });
        this.router.navigate(['/', 'successPage']);
  
   
  }
  previous(){
    this.router.navigate(['/', 'addressInfo']);
  }
}
