import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,ActivatedRouteSnapshot , ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss']
})


export class AddressInformationComponent {
 
  addressData = new FormGroup({
    street: new FormControl('', Validators.required),
    hnumber : new FormControl('', Validators.required),
    zcode : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required)

  })

  constructor( private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit():void{
    if(localStorage.getItem('formStage2Data'))
    {
      console.log("formStage1Data stage 1:",localStorage.getItem('formStage1Data'));
     
    }
   
  }
  previous()
  {
    this.router.navigate(['/', 'personalInfo']);
  }
  next()
  {
    localStorage.setItem('formStage2Data', JSON.stringify(this.addressData.value));
    this.router.navigate(['/', 'paymentInfo']);

}
}
