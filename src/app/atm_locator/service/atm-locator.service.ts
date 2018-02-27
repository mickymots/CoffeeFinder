// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Application specific dependencies
import { AtmLocator } from '../model/atm-locator';

@Injectable()
export class AtmLocatorService {
  // URL for ING ATM locations
  // allAtmUrl = 'https://www.ing.nl/api/locator/atms/';
  // private allAtmUrl = 'app/atm_locator/data/atm-data.json';
  private allAtmUrl = 'http://localhost:8080/all-atms';

  // Create constructor to get HTTP instance
  constructor(private http: Http) { }

  // Fetch all ING ATM locations
  getAllAtms(): Observable<any[]> {
    console.log('call from component');
    return this.http.get(this.allAtmUrl)
      // .map(this.extractData)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body;
  // }
  // private handleError(error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.status);
  // }


}
