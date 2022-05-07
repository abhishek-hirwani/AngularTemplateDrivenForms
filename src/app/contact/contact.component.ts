import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';
import { EnquiryService } from '../enquiry.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private enquiryService:EnquiryService) { }

  courses=["Java","MEAN STACK","Angular","React","JavaScrpit","NodeJS"];

  enquiry1= new Enquiry('','', 0,'default','default','default');

  hasGenderError: boolean=false
  hasCourseError: boolean=false
  hasTrainingModeError: boolean=false

  validateGender(gender: string){
    if(gender=="default"){
      this.hasGenderError=true
    }else{
      this.hasGenderError=false
    }
  }

  validateCourse(course: string){
    if(course=="default"){
      this.hasCourseError=true
    }else{
      this.hasCourseError=false
    }
  }

  validateTrainingMode(trainingmode: string){
    if(trainingmode=="default"){
      this.hasTrainingModeError=true
    }else{
      this.hasTrainingModeError=false
    }
  }

  isFormSubmitted:boolean=true
  message :string | undefined;
  submitForm=()=>{
    this.message='Than for Contacting Konverge.AI, Our Team will get back shortly';
    this.isFormSubmitted=false
    console.log(this.enquiry1)
    this.enquiryService.sendEnquiry(this.enquiry1).
    subscribe(data=>console.log("Data",data),
    error=>console.log("Error",error))
  }


  ngOnInit(): void {
  }

}
