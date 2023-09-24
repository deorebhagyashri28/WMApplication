import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.scss']
})
export class PaymentInformationComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
  }

  ngOnInit():void{}

  paymentData = new FormGroup({
    accOwner: new FormControl('', Validators.required),
    iban : new FormControl('', Validators.required)
  })

  submit()
  {
    this.router.navigate(['/', 'successPage']);
  }
  previous(){
    this.router.navigate(['/', 'addressInfo']);
  }
}
