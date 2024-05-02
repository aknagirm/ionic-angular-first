import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  selectedRecipe: Recipes;
  recipeId: string;
  constructor(
    private recipesService: RecipesService,
    private routes: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.routes.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        return;
      }
      this.recipeId = params.get('recipeId');
      this.selectedRecipe = this.recipesService.getRecipe(this.recipeId);
    });
  }

  deleteSelectedRecipe() {
    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Do you want to delete the item?',
        buttons: [
          { text: 'Cancel', role: 'cancel' },
          {
            text: 'Delete',
            handler: () => {
              this.recipesService.deleteRecipe(this.recipeId);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alert) => alert.present());
  }
}
