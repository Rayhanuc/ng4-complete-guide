import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://unsplash.com/photos/FheBw4BfRpQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8UmVjaXBlfGVufDB8fHx8MTcyNTQwMTg5MHww&force=true&w=640'),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://unsplash.com/photos/12eHC6FxPyg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzI1MzkxNzk2fA&force=true&w=1920'),
    new Recipe(
      'A Test Recipe 3',
      'This is simply a test 3',
      'https://unsplash.com/photos/eYfcfdgpcFY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fFJlY2lwZXxlbnwwfDB8fHwxNzI1NDAxODk0fDA&force=true&w=640')
  ];
  constructor() {
  }

  ngOnInit() {
  }

  protected readonly Recipe = Recipe;
}
