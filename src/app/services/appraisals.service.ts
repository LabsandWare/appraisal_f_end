import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs'
import { first, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppraisalsService {

  constructor(private http: HttpClient, 
    @Inject('apiUrl') private apiUrl: string) { }

  
  getEmployee() {

  }

  createEmployee() {
    
  }

  getSupervisor() {

  }

  createSupervisor() {
    
  }

}
