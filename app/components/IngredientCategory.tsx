import React from 'react';
import { Ingredient } from '../types';
import IngredientItem from './IngredientItem';

interface IngredientCategoryProps {
  title: string;
  ingredients: Ingredient[];
  selectedIngredients: string[];
  onToggleIngredient: (id: string) => void;
}

const IngredientCategory: React.FC<IngredientCategoryProps> = ({
  title,
  ingredients,
  selectedIngredients,
  onToggleIngredient
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        {ingredients.map(ingredient => (
          <IngredientItem
            key={ingredient.id}
            ingredient={ingredient}
            isSelected={selectedIngredients.includes(ingredient.id)}
            onToggle={onToggleIngredient}
          />
        ))}
      </div>
    </div>
  );
};

export default IngredientCategory;