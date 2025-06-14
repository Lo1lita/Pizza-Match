import React from 'react';
import Image from 'next/image'; // Import the Image component
import { PizzaRecommendation } from '../types';

interface RecommendationCardProps {
  pizza: PizzaRecommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ pizza }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-amber-100 h-full flex flex-col">
      <div className="relative">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={600} // Add appropriate width
          height={288} // Add appropriate height (h-48 * ~6 to maintain aspect for a typical width)
          className="w-full h-48 object-cover"
          // Consider adding 'priority' if this image is often above the fold
          // priority={true}
        />
        <div className="absolute top-0 right-0 bg-amber-500 text-white text-lg font-bold py-1 px-3 rounded-bl-lg">
          {pizza.matchScore}%
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {pizza.description}
        </p>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Ingrediente:</h4>
          <div className="flex flex-wrap gap-1">
            {pizza.ingredients.map((ingredient, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;