'use client';

import React, { useRef, useMemo } from 'react';
import Image from 'next/image';
import ingredients from '../data/ingredients';

interface PizzaPreviewProps {
  selectedIngredientIds: string[];
}

const GRID_SIZE = 4;

const PizzaPreview: React.FC<PizzaPreviewProps> = ({ selectedIngredientIds }) => {
  const layoutCache = useRef<
    Record<string, { top: number; left: number; rotation: number; scale: number }[]>
  >({});

  const selectedIngredients = useMemo(() => {
    return ingredients.filter((ing) => selectedIngredientIds.includes(ing.id));
  }, [selectedIngredientIds]);

  const toppingInstances = useMemo(() => {
    const instances: {
      id: string;
      image: string;
      name: string;
      top: number;
      left: number;
      rotation: number;
      scale: number;
      key: string;
    }[] = [];

    const totalCells = GRID_SIZE * GRID_SIZE;
    const cellSize = 100 / GRID_SIZE;
    const padding = cellSize * 0.15;

    selectedIngredients.forEach((ingredient) => {
      // Assuming 'ou' should be 'egg' based on the later conditional
      if (ingredient.id === 'egg') {
        // Only one egg in the center
        layoutCache.current[ingredient.id] = [
          { top: 40, left: 40, rotation: 0, scale: 1 },
        ];
      } else if (!layoutCache.current[ingredient.id]) {
        layoutCache.current[ingredient.id] = [];

        for (let i = 0; i < totalCells; i++) {
          const row = Math.floor(i / GRID_SIZE);
          const col = i % GRID_SIZE;

          const offsetX = Math.random() * (cellSize - 2 * padding) + padding;
          const offsetY = Math.random() * (cellSize - 2 * padding) + padding;

          layoutCache.current[ingredient.id].push({
            top: row * cellSize + offsetY,
            left: col * cellSize + offsetX,
            rotation: Math.random() * 0, // This will always be 0
            scale: 0.8 + Math.random() * 0.4,
          });
        }
      }

      layoutCache.current[ingredient.id].forEach((layout, index) => {
        instances.push({
          id: ingredient.id,
          image: ingredient.image,
          name: ingredient.name,
          ...layout,
          key: `${ingredient.id}-${index}`,
        });
      });
    });

    return instances;
  }, [selectedIngredients]); // Removed selectedIngredientIds from here

  return (
    <div className="w-full max-w-[95vw] sm:max-w-3xl mx-auto aspect-square">
      <div className="relative w-full h-full">
        {/* Pizza Base */}
        <div className="absolute inset-0 bg-amber-100 rounded-full border-[25px] border-amber-700 shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-red-500/30 rounded-full" />
          <div className="absolute inset-0 bg-yellow-100/60 rounded-full" />

          {/* Toppings */}
          {toppingInstances.map((item) => (
            <div
              key={item.key}
              className="absolute"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                width: `${item.id === 'egg' ? 25 : (100 / GRID_SIZE) * 0.7}%`,
                transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                style={{ opacity: 0.9 }}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaPreview;