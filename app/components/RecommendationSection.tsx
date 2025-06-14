import React from 'react';
import { PizzaRecommendation } from '../types';
import RecommendationCard from './RecommendationCard';

interface RecommendationSectionProps {
  recommendations: PizzaRecommendation[];
  isLoading: boolean;
  onFindMatches: () => void;
  hasSelectedIngredients: boolean;
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  recommendations,
  isLoading,
  onFindMatches,
  hasSelectedIngredients
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Buton Recomandă */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={onFindMatches}
          disabled={isLoading || !hasSelectedIngredients}
          className={`px-6 py-3 rounded-lg flex items-center transition-all duration-300 shadow
            ${hasSelectedIngredients 
              ? 'bg-amber-500 hover:bg-amber-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Se caută potriviri...
            </>
          ) : (
            <>
              🎯 Recomandă Pizza
            </>
          )}
        </button>
      </div>

      {/* Rezultate Recomandare */}
      {recommendations.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((pizza) => (
              <RecommendationCard key={pizza.id} pizza={pizza} />
            ))}
          </div>

          {/* Mesaj marketing-friendly după recomandări */}
          <p className="text-center text-sm text-gray-600 mt-6 italic">
            Recomandarea noastră e doar începutul – la comandă poți adăuga extra ingrediente sau scoate ingrediente!
          </p>

        </>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow text-center p-8">
          {hasSelectedIngredients ? (
            <div className="opacity-75">
              <p className="text-lg font-medium text-gray-700">Fă clic pe „Recomandă o Pizza” pentru a vedea potrivirile!</p>
            </div>
          ) : (
            <div className="opacity-75">
              <p className="text-lg font-medium text-gray-700">
                Selectează ingrediente din panoul din stânga pentru a primi recomandări
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecommendationSection;
