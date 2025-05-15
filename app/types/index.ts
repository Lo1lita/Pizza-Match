export interface Ingredient {
  id: string;
  name: string;
  category: 'cheese' | 'meat' | 'vegetable' | 'seafood' | 'herb' | 'other';
  image: string;
}

export interface TraditionalPizza {
  id: string;
  name: string;
  ingredients: string[];
  image: string;
  description: string;
}

export interface PizzaRecommendation extends TraditionalPizza {
  matchScore: number;
}