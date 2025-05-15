import { Ingredient } from '../types';

const ingredients: Ingredient[] = [
  // 🧀 Brânzeturi
  {
    id: 'parmezan',
    name: 'Parmezan',
    category: 'cheese',
    image: '/ingredientIcon/parmezan.png',
  },
  {
    id: 'gorgonzola',
    name: 'Gorgonzola',
    category: 'cheese',
    image: '/ingredientIcon/gorgo.png',
  },
  {
    id: 'granna',
    name: 'Grana',
    category: 'cheese',
    image: '/ingredientIcon/granna.png',
  },

  // 🥩 Cărnuri și mezeluri
  {
    id: 'sunca',
    name: 'Șuncă',
    category: 'meat',
    image: '/ingredientIcon/ham.png',
  },
  {
    id: 'salam',
    name: 'Salam',
    category: 'meat',
    image: '/ingredientIcon/pepperoni.png',
  },
  {
    id: 'salam picant',
    name: 'Salam picant',
    category: 'meat',
    image: '/ingredientIcon/pepperoni (1).png',
  },
  {
    id: 'prosciutto crudo',
    name: 'Prosciutto crudo',
    category: 'meat',
    image: '/ingredientIcon/crudo.png',
  },
  {
    id: 'bacon',
    name: 'Bacon',
    category: 'meat',
    image: '/ingredientIcon/bacon.png',
  },
  {
    id: 'carnat',
    name: 'Cârnat',
    category: 'meat',
    image: '/ingredientIcon/carnat.png',
  },
  {
    id: 'piept de pui',
    name: 'Piept de pui',
    category: 'meat',
    image: '/ingredientIcon/chicken-breast.png',
  },
  {
    id: 'ceafa afumata',
    name: 'Ceafă afumată',
    category: 'meat',
    image: '/ingredientIcon/ceafa.png',
  },
  {
    id: 'muschiulet de porc',
    name: 'Mușchiuleț de porc',
    category: 'meat',
    image: '/ingredientIcon/steak.svg',
  },

  // 🐟 Pește și fructe de mare
  {
    id: 'ton',
    name: 'Ton',
    category: 'seafood',
    image: '/ingredientIcon/ton1.png',
  },
    {
    id: 'creveti',
    name: 'Creveți',
    category: 'seafood',
    image: '/ingredientIcon/shrimp.png',
  },
  {
    id: 'midi',
    name: 'Midii',
    category: 'seafood',
    image: '/ingredientIcon/mussel.png',
  },
  {
    id: 'ansoa',
    name: 'Anșoa',
    category: 'seafood',
    image: '/ingredientIcon/ancho1.png',
  },



  // 🍄 Legume și ciuperci
  {
    id: 'ciuperci',
    name: 'Ciuperci',
    category: 'vegetable',
    image: '/ingredientIcon/ciuperci (2).png',
  },
  {
    id: 'ardei',
    name: 'Ardei',
    category: 'vegetable',
    image: '/ingredientIcon/ardei.png',
  },
  {
    id: 'ceapa',
    name: 'Ceapă',
    category: 'vegetable',
    image: '/ingredientIcon/ceapa.png',
  },
    {
    id: 'masline',
    name: 'Măsline',
    category: 'vegetable',
    image: '/ingredientIcon/olive.svg',
  },
  {
    id: 'porumb',
    name: 'Porumb',
    category: 'vegetable',
    image: '/ingredientIcon/porumb.png',
  },
  {
    id: 'rosie',
    name: 'Roșie',
    category: 'vegetable',
    image: '/ingredientIcon/rosie.png',
  },
  {
    id: 'cartofi',
    name: 'Cartofi',
    category: 'vegetable',
    image: '/ingredientIcon/cartofi.png',
  },
  {
    id: 'vanata',
    name: 'Vânătă',
    category: 'vegetable',
    image: '/ingredientIcon/vanata.png',
  },
  {
    id: 'dovlecel',
    name: 'Dovlecel',
    category: 'vegetable',
    image: '/ingredientIcon/dovlecel.png',
  },
  {
    id: 'hribi',
    name: 'Hribii',
    category: 'vegetable',
    image: '/ingredientIcon/hribi.png',
  },
    {
    id: 'carciofi',
    name: 'Carciofi',
    category: 'vegetable',
    image: '/ingredientIcon/car.png',
  },
  {
    id: 'baby spanac',
    name: 'Baby spanac',
    category: 'vegetable',
    image: '/ingredientIcon/spanac.png',
  },
  {
    id: 'rucola',
    name: 'Rucola',
    category: 'vegetable',
    image: '/ingredientIcon/rucola.png',
  },
  /*
  {
    id: 'mix salata',
    name: 'Mix salată',
    category: 'vegetable',
    image: '/ingredientIcon/mix.png',
  },
  */
  {
    id: 'salata verde',
    name: 'Salată verde',
    category: 'vegetable',
    image: '/ingredientIcon/salata.png',
  },

  // 🌿 Verdețuri, condimente și sosuri
  {
    id: 'usturoi',
    name: 'Usturoi',
    category: 'herb',
    image: '/ingredientIcon/usturoi.png',
  },
  {
    id: 'busuioc',
    name: 'Busuioc',
    category: 'herb',
    image: '/ingredientIcon/basil.png',
  },
  {
    id: 'oregano',
    name: 'Oregano',
    category: 'herb',
    image: '/ingredientIcon/oregano.png',
  },
  {
    id: 'patrunjel',
    name: 'Pătrunjel',
    category: 'herb',
    image: '/ingredientIcon/parsley.png',
  },


  // 🍍 Alte ingrediente
  {
    id: 'ou',
    name: 'Ou',
    category: 'other',
    image: '/ingredientIcon/egg.svg',
  },
  {
    id: 'capere',
    name: 'Capere',
    category: 'other',
    image: '/ingredientIcon/bud.png',
  },
  {
    id: 'ananas',
    name: 'Ananas',
    category: 'other',
    image: '/ingredientIcon/ananas.png',
  },
  {
    id: 'susan',
    name: 'Susan',
    category: 'other',
    image: '/ingredientIcon/sesame.png',
  },
  {
    id: 'smantana',
    name: 'Smântână',
    category: 'other',
    image: '/ingredientIcon/smantana.png',
  },
 /* {
    id: 'spaghete in sos gorgonzola',
    name: 'Spaghete în sos gorgonzola',
    category: 'other',
    image: '/ingredientIcon/.png',
  },*/
];

export default ingredients;
