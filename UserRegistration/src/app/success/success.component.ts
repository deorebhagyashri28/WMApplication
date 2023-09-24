import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  constructor()
  {
    
    // clear storage here on success
    localStorage.clear();
  }

  ngOnInit():void{

  }

}
