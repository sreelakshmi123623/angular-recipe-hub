import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Apiservices } from '../services/apiservices';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';



@Component({
  selector: 'app-view-recipe',
  imports: [Header,RouterLink],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

  recipeId:string=""
  recipe:any={}
  allRelatedRecipes:any=[]
//ActivatedRoute = Provides access to information about a
// route associated with a component that is loaded in an outlet.
// Use to traverse the RouterState tree and extract information from nodes
  constructor(private route:ActivatedRoute,private api:Apiservices){}
  

  ngOnInit(){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      this.recipeId=res.id
      this.getRecipeDetails(this.recipeId)//by me
    })
    
  }

  getRecipeDetails(recipeId:string){
    this.api.viewRecipeAPI(recipeId).subscribe((res:any)=>{
      this.recipe=res
      this.getRelatedRecipe(this.recipe.cuisine)//by me
    })
  }


getRelatedRecipe(cuisine:string){
  this.api.relatedRecipeAPI(cuisine).subscribe((res:any)=>{
    if(res.length>1){
      this.allRelatedRecipes=res.filter((item:any)=>item.name!=this.recipe.name)
      
    }else{
      this.allRelatedRecipes=[]
    }
  })
}

saveRecipe(){
  this.api.saveRecipeAPI(this.recipeId,this.recipe).subscribe({
    // for get both success and error ,success in next key and error in error key
    next:(res:any)=>{
      alert("recipe added to saved collection")
    },
    error:(reason:any)=>{
      alert(reason.error)
    }
  })
}

generatePdf(){
  let pdf=new jsPDF()
  pdf.setFontSize(16)
  pdf.setTextColor('red')
  pdf.text(this.recipe.name,10,10)
  pdf.setFontSize(12)
  pdf.setTextColor('black')
  pdf.text(`Cuisine: ${this.recipe.cuisine}`,10,20)
  pdf.text(`Servings: ${this.recipe.Servings}`,10,25)
  pdf.text(`Mode of Cooking: ${this.recipe.difficulty}`,10,30)
  pdf.text(`Total Prepration Time: ${this.recipe.prepTimeMinutes}`,10,35)
  pdf.text(`Total Cook Time: ${this.recipe.cookTimeMinutes}`,10,40)
  pdf.text(`Total Calorie: ${this.recipe.caloriesPerServing}`,10,45)
  //ingredients instructions
  let head=[["Ingredients Needed","Cooking Instructions"]]
  let body:any=[]
  body.push([this.recipe.ingredients,this.recipe.instructions])
  autoTable(pdf,{head,body,startY:50})
  pdf.output('dataurlnewwindow')
  pdf.save('recipe.pdf')
}

downloadRecipe(){
  this.api.downloadRecipeAPI(this.recipeId,this.recipe).subscribe((res:any)=>{
    
    // download pdf
    this.generatePdf()
  })
}



}
