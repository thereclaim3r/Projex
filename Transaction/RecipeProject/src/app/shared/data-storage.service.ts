import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://recipeproject-9e8a4.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipe(),{
      observe: 'body',
      // headers: new HttpHeaders().set('Authorization', 'Bearer 12345afsad')
    });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.authService.getToken();
    // this.httpClient.get<Recipe[]>('https://recipeproject-9e8a4.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://recipeproject-9e8a4.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) =>{
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;

        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        });
  }



}
