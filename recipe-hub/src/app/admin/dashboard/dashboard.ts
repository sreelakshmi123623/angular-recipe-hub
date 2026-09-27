import { Component } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


userCount:number=0
recipeCount:number=0
downloadCount:number=0
requestCount:number=0
selected=new Date()

constructor(private api:Apiservices){}

ngOnInit(){
this.getUserCount()
this.getRecipeCount()
this.getDownloadCount()
this.getRequestCount()
}


getUserCount(){
  this.api.getAllUserAPI().subscribe((res:any)=>{
    this.userCount=res.length
  })
}

getRecipeCount(){
  this.api.getAllRecipeAPI().subscribe((res:any)=>{
    this.recipeCount=res.length
  })
}
getDownloadCount(){
  this.api.getAllDownloadsAPI().subscribe((res:any)=>{
    this.downloadCount=res.length
  })
}
getRequestCount(){
  this.api.getAllFeedbacksAPI().subscribe((res:any)=>{
    this.requestCount=res.filter((item:any)=>item.status=="pending").length
  })
}

}
