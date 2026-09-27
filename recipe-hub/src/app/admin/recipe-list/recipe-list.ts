import { Component } from '@angular/core';
import { Apiservices } from '../../services/apiservices';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {

allRecipes:any=[]
searchRecipe:string=""

constructor(private api:Apiservices){}


   ngOnInit() {
    this.getAllRecipes()
  }

  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipes = res
     

    })
  }

removeRecipe(id:string){
  this.api.deleteRecipeAPI(id).subscribe((res:any)=>{
    alert("Recipe deleted")
    this.getAllRecipes()
  })
}

}
