import { Component } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  allUsers:any=[]

  constructor(private api:Apiservices){}
  
   ngOnInit() {
    this.getAllusers()
  }

  getAllusers() {
    this.api.getAllUserAPI().subscribe((res: any) => {
      this.allUsers = res
     

    })
  }

}
