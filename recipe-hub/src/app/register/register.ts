import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservices } from '../services/apiservices';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm:FormGroup

  constructor(private fb:FormBuilder,private api:Apiservices,private router:Router){
    this.registerForm=this.fb.group({
      username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  }
register(){
  if(this.registerForm.valid){
    const username=this.registerForm.value.username
    const email=this.registerForm.value.email
    const password=this.registerForm.value.password
    // api call

    this.api.registerAPI({username,email,password}).subscribe({
      next:(res:any)=>{
        alert("user registered")
        this.router.navigateByUrl("/login")
        this.registerForm.reset()
      },
      error:(reason:any)=>{
        alert(reason.error)
      }
    })

  }else{
    alert("Invalid details")
  }

}

}
