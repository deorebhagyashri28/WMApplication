import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallServiceService } from '../Services/http-call-service.service';
import { PaymentData } from '../models/payment-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataStorageServiceService } from '../Services/data-storage-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent {
  constructor(private router: Router,public userDataService: HttpCallServiceService,public dataStorage:DataStorageServiceService,private spinner: NgxSpinnerService){
  
  }

  ngOnInit():void{
  }

  paymentDetail = new FormGroup({
    accOwner: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    iban : new FormControl('', Validators.required)
  })

 
  submitForm()
  { 
    this.spinner.show();
    var paymentData: PaymentData = {
      "customerId":new Date().getTime(),
      "iban":this.paymentDetail.value.iban || '',
      "owner":this.paymentDetail.value.accOwner || ''
      }
 
        this.userDataService.saveUser(paymentData).subscribe((response: any) => {
          if(response)
          {
            this.dataStorage.setLocalData('paymentDataId',response.paymentDataId);
            this.spinner.hide();
            this.router.navigate(['/', 'successPage']); 
          }
          else{
            this.spinner.hide();
            this.dataStorage.clearStorage();           
          }

        });
      
   
  }
  

  goToPreviousStep(){
    this.router.navigate(['/', 'addressInfo']);
  }
}
