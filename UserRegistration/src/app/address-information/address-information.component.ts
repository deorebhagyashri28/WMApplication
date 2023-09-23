import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageServiceService } from '../Services/data-storage-service.service';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss']
})


export class AddressInformationComponent {
 
  addressData = new FormGroup({
    street: new FormControl('', Validators.required),
    houseNumber : new FormControl('', Validators.required),
    zipCode : new FormControl('', [Validators.required, Validators.maxLength(5)]),
    city : new FormControl('', Validators.required)
  })

  constructor( private router: Router,public dataStorage:DataStorageServiceService){ }

  ngOnInit():void{
    this.addressData.setValue(JSON.parse(localStorage.getItem('addressDetailsInSessions') ||''));  
  }
  goToPreviousStep()
  {
    this.router.navigate(['/', 'personalInfo']);
  }
  goToNextStep()
  {
    this.dataStorage.setLocalData('addressDetailsInSessions', JSON.stringify(this.addressData.value));
    this.router.navigate(['/', 'paymentInfo']);
  }
}
