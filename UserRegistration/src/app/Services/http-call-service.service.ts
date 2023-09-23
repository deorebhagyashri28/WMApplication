import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentData } from '../models/payment-data';


@Injectable({
  providedIn: 'root'
})

export class HttpCallServiceService {

  constructor(private http: HttpClient) { }

  public saveUser(userdata: PaymentData): Observable<any> 
  {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'charset':'utf-8',
      'Access-Control-Allow-Origin': '*',
    });

    let options = { headers: headers };

    const url = '/default/wunderfleet-recruiting-backend-dev-save-payment-data';
    return this.http.post<any>(url,userdata,options);
  }
}
