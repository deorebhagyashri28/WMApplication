import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class HttpCallServiceService {

  constructor(private http: HttpClient) { }

  public saveUser(userdata: JSON): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'charset':'utf-8',
      'Access-Control-Allow-Origin': '*',
    });

    let options = { headers: headers };

    const url = 'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data';
    return this.http.post<any>(url,userdata,options);
  }
}
