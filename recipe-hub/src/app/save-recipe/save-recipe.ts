import { Component } from '@angular/core';
import { Apiservices } from '../services/apiservices';
import { Header } from '../header/header';

@Component({
  selector: 'app-save-recipe',
  imports: [Header],
  templateUrl: './save-recipe.html',
  styleUrl: './save-recipe.css',
})
export class SaveRecipe {

  saveRecipe:any=[]

constructor(private api:Apiservices){}

ngOnInit(){
  this.getSavedRecipes()
}

getSavedRecipes(){
  this.api.getSavedRecipeAPI().subscribe((res:any)=>{
    this.saveRecipe=res
  })
}

removeRecipe(id:string){
  this.api.deleteSavedRecipeAPI(id).subscribe((res:any)=>{
    alert("recipe deleted")
    this.getSavedRecipes()
  })
}

}
