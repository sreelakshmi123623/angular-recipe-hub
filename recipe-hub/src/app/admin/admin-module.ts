import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { UserList } from './user-list/user-list';
import { Downloads } from './downloads/downloads';
import { Request } from './request/request';
import { ManageRecipes } from './manage-recipes/manage-recipes';
import { Sidebar } from './sidebar/sidebar';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipe/search-pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import {HighChartsModule} from 'highcharts-angular'
 
@NgModule({
  declarations: [
    Dashboard,
    RecipeList,
    UserList,
    Downloads,
    Request,
    ManageRecipes,
    Sidebar
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    // HighChartsModule
  ]
})
export class AdminModule { }
