import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Apiservices } from '../services/apiservices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
allRecipe:any[]=[]
allfeedbacks:any[]=[]
  //setting api access and router access
  constructor(private api:Apiservices){}

  ngOnInit(){
    this.getAllRecipes()
    this.getAllFeedbacks()
  }


  getAllRecipes(){
    this.api.getAllRecipeAPI().subscribe((res:any)=>{
      this.allRecipe=res.slice(0,6)
      console.log(this.allRecipe);
      
    })
  }

    getAllFeedbacks(){
    this.api.getAllApprovedFeedbackAPI().subscribe((res:any)=>{
      this.allfeedbacks=res
      console.log(this.allfeedbacks);
      
   
      
    })
  }
}
