import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {

  constructor() { }

  getLocalData(keyData:any)
  {
    return localStorage.getItem(keyData); 
    
  }
  setLocalData(keyData:any,data:any)
  {
    localStorage.setItem(keyData,data);  
  }
  clearStorage()
  {
    localStorage.clear();
  }
}
