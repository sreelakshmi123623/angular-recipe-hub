import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../services/apiservices';

@Component({
  selector: 'app-contact',
  imports: [Header,ReactiveFormsModule,],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

    testomonyForm:FormGroup

  constructor(private fb:FormBuilder,private api:Apiservices){
    this.testomonyForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }

  addTestimony(){
    if(this.testomonyForm.valid){
       const name=this.testomonyForm.value.name
    const email=this.testomonyForm.value.email
    const message=this.testomonyForm.value.message

    this.api.addTestimonyAPI({name,email,message}).subscribe((res:any)=>{
      alert("Thankyou for adding your valuable feedback.....")
      this.testomonyForm.reset()
    })
    }else{
      alert("Invalid form")
    }
  }
}
