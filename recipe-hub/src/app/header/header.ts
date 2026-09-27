import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  isLoggedIn:boolean=false
  loginUserName:string=""

  constructor(private router:Router){}

  ngOnInit(){
    if(sessionStorage.getItem("token")&&sessionStorage.getItem("user")){
      this.isLoggedIn=true
      this.loginUserName=JSON.parse(sessionStorage.getItem("user")||"").username
    }else{
      this.isLoggedIn=false
      this.loginUserName=""
    }
  }



  logOut(){
    sessionStorage.clear()
    this.loginUserName=""
    this.isLoggedIn=false
    this.router.navigateByUrl("/")
  }

}
