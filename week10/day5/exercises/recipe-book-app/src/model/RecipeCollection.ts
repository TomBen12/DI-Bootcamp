import RecipeItem from "./RecipeItem";

class RecipeCollection {
  private recipes: RecipeItem[] = [];
  private storageKey = "recipeCollection";

  get recipeList(): RecipeItem[] {
    return this.recipes;
  }
  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find((recipe) => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
    }
  }

  getFavorites(): RecipeItem[] {
    return this.recipes.filter((recipe) => recipe.isFavorite);
  }

  saveToLocalStorage(): void {
    const jsonData = JSON.stringify(this.recipes);
    localStorage.setItem(this.storageKey, jsonData);
  }

  loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      const parsedData = JSON.parse(data);
      this.recipes = parsedData.map(
        (recipe: RecipeItem) =>
          new RecipeItem(
            recipe.title,
            recipe.ingredients,
            recipe.instructions,
            recipe.isFavorite
          )
      );
    }
  }
}

export default RecipeCollection;
