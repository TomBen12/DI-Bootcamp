import { v4 as uuidv4 } from "uuid";

type Ingredient = {
  name: string;
  amount: string;
};

class RecipeItem {
  id: string;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  isFavorite: boolean;

  constructor(
    title: string,
    ingredients: Ingredient[],
    instructions: string[],
    isFavorite: boolean = false
  ) {
    this.id = uuidv4();
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.isFavorite = isFavorite;
  }
}

export default RecipeItem;
