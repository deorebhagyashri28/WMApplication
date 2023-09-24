import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageServiceService } from '../Services/data-storage-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss']
})


export class AddressInformationComponent {
 
  addressData = new FormGroup({
    street: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9 _-]*$')]),
    houseNumber : new FormControl('', [Validators.required,Validators.pattern('^[0-9]*$')]),
    zipCode : new FormControl('', [Validators.required, Validators.maxLength(5),Validators.pattern('^[0-9]*$')]),
    city : new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z _-]*$')])
  })

  constructor( private router: Router,public dataStorage:DataStorageServiceService,private spinner: NgxSpinnerService){ 
    if(this.dataStorage.getLocalData('addressDetailsInSessions'))
    {
      this.router.navigate(['/', 'paymentInfo']); 
    }
  }

  ngOnInit():void{
    this.addressData.setValue(JSON.parse(this.dataStorage.getLocalData('addressDetailsInSessions') ||''));  
  }
  goToPreviousStep()
  {
    this.router.navigate(['/', 'personalInfo']);
  }
  goToNextStep()
  {
    this.spinner.show();
    this.dataStorage.setLocalData('addressDetailsInSessions', JSON.stringify(this.addressData.value));
   
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/', 'paymentInfo']);
    }, 2000)
  }
}
