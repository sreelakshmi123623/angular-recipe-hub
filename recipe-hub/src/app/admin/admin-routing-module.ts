import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { UserList } from './user-list/user-list';
import { RecipeList } from './recipe-list/recipe-list';
import { Downloads } from './downloads/downloads';
import { Request } from './request/request';
import { ManageRecipes } from './manage-recipes/manage-recipes';

const routes: Routes = [

// http://localhost:4200/admin

{
  path:"",component:Dashboard,title:"admin"
},

{
  path:"user-list",component:UserList,title:"admin"
},

{
  path:"recipe-list",component:RecipeList,title:"admin"
},

{
  path:"download-list",component:Downloads,title:"admin"
},

{
  path:"request",component:Request,title:"admin"
},

{
  path:"manage-recipe",component:ManageRecipes,title:"admin"
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
