import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  stageFirstData: any;
 

  constructor(private router: Router){
  }

  ngOnInit():void{
    
    if(localStorage.getItem('formStage1Data'))
    {
      console.log("formStage1Data stage 1:",localStorage.getItem('formStage1Data'));
    }
   
  }

 
  personalData = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname : new FormControl('', Validators.required),
    telephone : new FormControl('', Validators.required)
  })

  next(){
    localStorage.setItem('formStage1Data', JSON.stringify(this.personalData.value));
    this.router.navigate(['/', 'addressInfo']);
  }
}
