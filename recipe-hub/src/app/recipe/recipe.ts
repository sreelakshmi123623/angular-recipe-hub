import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Router } from '@angular/router';
import { Apiservices } from '../services/apiservices';
import { SearchPipe } from '../pipe/search-pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipe',
  imports: [Header, FormsModule, SearchPipe, NgxPaginationModule],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe {

  allRecipe: any[] = []
  allRecipeDummy: any[] = []
  searchKey: string = ""
  p: number = 1;

  //setting api access and router access
  constructor(private api: Apiservices, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes()
  }

// display all recipes
  getAllRecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipe = res
      this.allRecipeDummy = this.allRecipe
      // console.log(this.allRecipe);

    })
  }

  // for search recipe
  filterRecipes(key: string, value: string) {
    this.allRecipe = this.allRecipeDummy.filter((item: any) => item[key].includes(value))
  }

// for view single recipies on user click
  viewRecipe(recipeId: string) {
    if (sessionStorage.getItem('token')) {
      this.router.navigateByUrl(`view-recipe/${recipeId}`)
    } else {
      alert("Please login to explore our recipes")
    }
  }

}
