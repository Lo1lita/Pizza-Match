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
        const matchedCount = pizza.ingredients.filter(i =>
          selectedIngredients.includes(i)
        ).length;

        const s = selectedIngredients.length;
        const p = pizza.ingredients.length;

        // formula compactă (Dice × boost)
        const score =
          s && p ? (2 * matchedCount * matchedCount) / (s * (s + p)) : 0;

        return { ...pizza, matchScore: Math.round(score * 100) };
      });

      // 1️⃣ păstrăm doar scoruri peste 10 și sortăm descrescător
      const sorted = matches
        .filter(p => p.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);

      // 2️⃣ determinăm pragul de la locul 3 (dacă există)
      let thresholdScore = 0;
      if (sorted.length >= 3) {
        thresholdScore = sorted[2].matchScore;
      }

      // 3️⃣ includem tot ce are scor ≥ thresholdScore
      const topMatches =
        thresholdScore === 0 ? sorted : sorted.filter(p => p.matchScore >= thresholdScore);

      setRecommendations(topMatches);
      setIsLoading(false);
    }, 1000);
  }, []);

  return { recommendations, isLoading, findMatches };
};
