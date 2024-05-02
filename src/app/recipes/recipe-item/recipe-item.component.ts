import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipes;
  constructor() {}

  ngOnInit() {}
}
