import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageServiceService } from '../Services/data-storage-service.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})

export class PersonalInformationComponent implements OnInit {

  personalData = new FormGroup({
    fname: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
    lname : new FormControl(''),
    telephone : new FormControl('', Validators.required)
  })

  constructor(private router: Router,public dataStorage:DataStorageServiceService){
  }

  ngOnInit():void{   
      this.personalData.setValue(JSON.parse(localStorage.getItem('personalDetailsInSessions') ||'')); 
   
  } 

  goToNextStep()
  {
    this.personalData.markAllAsTouched();   
    this.dataStorage.setLocalData('personalDetailsInSessions', JSON.stringify(this.personalData.value));
    this.router.navigate(['/', 'addressInfo']); 
  }
}
