import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipesComponent} from './recipes.component';



const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    { path: ':id', component: RecipeDetailsComponent},
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})

export class RecipesRoutingModule {}
