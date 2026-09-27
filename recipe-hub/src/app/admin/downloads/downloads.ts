import { Component } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-downloads',
  standalone: false,
  templateUrl: './downloads.html',
  styleUrl: './downloads.css',
})
export class Downloads {




  allDownloads:any=[]
  
    constructor(private api:Apiservices){}
    
     ngOnInit() {
      this.getAllDownloads()
    }
  
    getAllDownloads() {
      this.api.getAllDownloadsAPI().subscribe((res: any) => {
        this.allDownloads = res
       
  
      })
    }
  

}
