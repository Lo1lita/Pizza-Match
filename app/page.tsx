'use client'; // This is a Client Component

import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import PizzaPreview from './components/PizzaPreview';
import RecommendationSection from './components/RecommendationSection';
import { usePizzaMatch } from './hooks/usePizzaMatch';
import ingredients from './data/ingredients';

export default function HomePage() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const { recommendations, isLoading, findMatches } = usePizzaMatch();

  const handleToggleIngredient = (id: string) => {
    setSelectedIngredients(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleFindMatches = () => {
    if (selectedIngredients.length > 0) {
      findMatches(selectedIngredients);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Panel: Ingredient Selector */}
        <div className="w-full md:w-1/3 border-r border-gray-200">
          <IngredientSelector
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            onToggleIngredient={handleToggleIngredient}
          />
        </div>

        {/* Right Panel: Pizza Preview & Recommendations */}
        <div className="w-full md:w-2/3 p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pizza ta personalizată</h2>
            <p className="text-gray-600">
              {selectedIngredients.length === 0
                ? "Începe prin a selecta ingrediente din panoul din stânga"
                : `${selectedIngredients.length} ingredient${selectedIngredients.length !== 1 ? 'e' : ''} selectat${selectedIngredients.length !== 1 ? 'e' : ''}`
              }
            </p>
          </div>

          <div className="mb-9">
            <PizzaPreview selectedIngredientIds={selectedIngredients} />
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Recomandări de Pizza Tradițională
            </h2>
            <RecommendationSection
              recommendations={recommendations}
              isLoading={isLoading}
              onFindMatches={handleFindMatches}
              hasSelectedIngredients={selectedIngredients.length > 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}