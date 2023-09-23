import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpCallServiceService } from '../Services/http-call-service.service';
import { PaymentData } from '../models/payment-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataStorageServiceService } from '../Services/data-storage-service.service';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent {
  constructor(private router: Router,public userDataService: HttpCallServiceService,private snackBar: MatSnackBar,public dataStorage:DataStorageServiceService){
  }

  ngOnInit():void{
  }

  paymentDetail = new FormGroup({
    accOwner: new FormControl('', Validators.required),
    iban : new FormControl('', Validators.required)
  })

 
  submitForm()
  { 
    var paymentData: PaymentData = {
      "customerId":new Date().getTime(),
      "iban":this.paymentDetail.value.iban || '',
      "owner":this.paymentDetail.value.accOwner || ''
      }
 
        this.userDataService.saveUser(paymentData).subscribe((response: any) => {
          if(response)
          {
            this.dataStorage.setLocalData('paymentDataId',response.paymentDataId);
            this.router.navigate(['/', 'successPage']); 
          }
          else{
            this.dataStorage.clearStorage();           
          }

        });
      
   
  }
  

  goToPreviousStep(){
    this.router.navigate(['/', 'addressInfo']);
  }
}
