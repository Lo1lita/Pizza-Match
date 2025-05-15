import React from 'react';
import { Ingredient } from '../types';
import IngredientCategory from './IngredientCategory';

interface IngredientSelectorProps {
  ingredients: Ingredient[];
  selectedIngredients: string[];
  onToggleIngredient: (id: string) => void;
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({
  ingredients,
  selectedIngredients,
  onToggleIngredient
}) => {
  // Group ingredients by category
  const cheeseIngredients = ingredients.filter(ing => ing.category === 'cheese');
  const meatIngredients = ingredients.filter(ing => ing.category === 'meat');
  const vegetableIngredients = ingredients.filter(ing => ing.category === 'vegetable');
  const seafoodIngredients = ingredients.filter(ing => ing.category === 'seafood');
  const herbIngredients = ingredients.filter(ing => ing.category === 'herb');
  const otherIngredients = ingredients.filter(ing => ing.category === 'other');

  return (
    <div className="p-4 overflow-y-auto max-h-[calc(100vh-120px)] scrollbar-thin">
      <div className="sticky top-0 bg-white z-10 mb-4 pb-2">
        <h2 className="text-2xl font-bold text-gray-800">Ingrediente</h2>
        <p className="text-gray-600 text-sm">
          Selectează ingredientele pentru a-ți personaliza pizza
        </p>
      </div>

      <IngredientCategory
        title="Carne"
        ingredients={meatIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />

      <IngredientCategory
        title="Fructe de mare"
        ingredients={seafoodIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />

      <IngredientCategory
        title="Legume"
        ingredients={vegetableIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />

      <IngredientCategory
        title="Brânzeturi"
        ingredients={cheeseIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />

      <IngredientCategory
        title="Ierburi aromatice"
        ingredients={herbIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />

      <IngredientCategory
        title="Altele"
        ingredients={otherIngredients}
        selectedIngredients={selectedIngredients}
        onToggleIngredient={onToggleIngredient}
      />
    </div>
  );
};

export default IngredientSelector;
