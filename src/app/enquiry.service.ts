import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enquiry } from './enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/enquiry"

  sendEnquiry=(enquiry:Enquiry)=>{
    return this.http.post<any>(this.url,enquiry);
  }
}
