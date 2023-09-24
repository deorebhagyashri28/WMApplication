import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageServiceService } from '../Services/data-storage-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})

export class PersonalInformationComponent implements OnInit {

  personalData = new FormGroup({
    fname: new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
    lname : new FormControl('',Validators.pattern('^[a-zA-Z ]*$')),
    telephone : new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern('^[+]*[0-9]*$')])
  })

  constructor(private router: Router,public dataStorage:DataStorageServiceService,private spinner: NgxSpinnerService){
    
    if(this.dataStorage.getLocalData('personalDetailsInSessions'))
    {
      this.router.navigate(['/', 'addressInfo']); 

    }else if(this.dataStorage.getLocalData('personalDetailsInSessions') && this.dataStorage.getLocalData('addressDetailsInSessions'))
    {
      this.router.navigate(['/', 'paymentInfo']); 

    }
  }

  ngOnInit():void{   
      // this.personalData.setValue(JSON.parse(localStorage.getItem('personalDetailsInSessions') ||''));    
      this.personalData.setValue(JSON.parse(this.dataStorage.getLocalData('personalDetailsInSessions') ||''));    
  } 

  goToNextStep()
  {
    this.spinner.show();
    this.dataStorage.setLocalData('personalDetailsInSessions', JSON.stringify(this.personalData.value));
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/', 'addressInfo']); 
    }, 2000);
   
  }




}
