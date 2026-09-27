import { Component } from '@angular/core';
import { Apiservices } from '../../services/apiservices';
import { log } from 'console';

@Component({
  selector: 'app-request',
  standalone: false,
  templateUrl: './request.html',
  styleUrl: './request.css',
})
export class Request {


  allTestimony:any=[]
 
  
  constructor(private api:Apiservices){}
  
  
     ngOnInit() {
      this.getAllTestimony()
    }
  
    getAllTestimony() {
      this.api.getAllFeedbacksAPI().subscribe((res: any) => {
        this.allTestimony = res
       console.log(this.allTestimony);
       
  
      })
    }

    
    updateTestimony(id:string,status:string) {
      this.api.updateFeedbackAPI(id,status).subscribe((res: any) => {
        this.getAllTestimony()
       
  
      })
    }
}
