import { useState, useCallback } from 'react';
import { PizzaRecommendation, TraditionalPizza } from '../types';
import traditionalPizzas from '../data/traditionalPizzas';

export const usePizzaMatch = () => {
  const [recommendations, setRecommendations] = useState<PizzaRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const findMatches = useCallback((selectedIngredients: string[]) => {
    setIsLoading(true);

    setTimeout(() => {
      const matches = traditionalPizzas.map((pizza: TraditionalPizza) => {
        const matching = pizza.ingredients.filter(i => selectedIngredients.includes(i));
        const extraSelected = selectedIngredients.filter(i => !pizza.ingredients.includes(i));

        // Base score: matched / total ingredients in pizza
        let score = (matching.length / pizza.ingredients.length) * 100;

        // Dynamic penalty based on number of selected ingredients
        const penaltyPerExtra = selectedIngredients.length > 0
          ? (1 / selectedIngredients.length) * 100
          : 0;

        // Apply penalty
        score -= extraSelected.length * penaltyPerExtra;

        const matchScore = Math.max(0, Math.round(score));

        return {
          ...pizza,
          matchScore
        };
      });

      const topMatches = matches
        .filter(p => p.matchScore >= 10)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3);

      setRecommendations(topMatches);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { recommendations, isLoading, findMatches };
};
