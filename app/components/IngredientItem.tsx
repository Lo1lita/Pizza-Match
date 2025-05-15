import React from 'react';
import { Ingredient } from '../types';

interface IngredientItemProps {
  ingredient: Ingredient;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ 
  ingredient, 
  isSelected, 
  onToggle 
}) => {
  return (
    <div 
      className={`flex items-center border-2 rounded-lg mb-2 transition-all duration-300 cursor-pointer
        ${isSelected 
          ? 'border-amber-600 bg-amber-50' 
          : 'border-gray-200 hover:border-amber-300'
        }`}
      onClick={() => onToggle(ingredient.id)}
    >
      <div className="w-16 h-16 p-2 flex-shrink-0">
        <img 
          src={ingredient.image} 
          alt={ingredient.name} 
          className="w-full h-full object-cover rounded" 
        />
      </div>
      
      <div className="flex-grow px-3 py-2">
        <div className="flex items-center">
          <span className="font-medium text-black">{ingredient.name}</span>
        </div>
      </div>
      
      <div className="px-4">
        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all
          ${isSelected 
            ? 'bg-amber-600 border-amber-600' 
            : 'border-gray-300'
          }`}
        >
          {isSelected && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
