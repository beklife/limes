import type { MenuItem } from "@shared/schema";

export const mockMenuItems: MenuItem[] = [
  // Drinks
  {
    id: 1,
    name: "Kölsch",
    description: "Local favorite, 0.3L",
    price: "€2.50",
    category: "drink",
  },
  {
    id: 2,
    name: "Pils",
    description: "Draft beer, 0.4L",
    price: "€3.50",
    category: "drink",
  },
  {
    id: 3,
    name: "Craft Beer",
    description: "Rotating selection, 0.33L",
    price: "€4.50",
    category: "drink",
  },
  {
    id: 4,
    name: "Red Wine",
    description: "House wine, 0.2L",
    price: "€5.00",
    category: "drink",
  },
  {
    id: 5,
    name: "White Wine",
    description: "House wine, 0.2L",
    price: "€5.00",
    category: "drink",
  },
  {
    id: 6,
    name: "Club Mate",
    description: "Energy drink, 0.5L",
    price: "€3.50",
    category: "drink",
  },
  {
    id: 7,
    name: "Soft Drinks",
    description: "Cola, Sprite, Fanta, 0.4L",
    price: "€3.00",
    category: "drink",
  },
  {
    id: 8,
    name: "Espresso",
    description: "Double shot",
    price: "€2.50",
    category: "drink",
  },

  // Food
  {
    id: 9,
    name: "Flammkuchen",
    description: "Classic Alsatian pizza with crème fraîche, onions & bacon",
    price: "€8.50",
    category: "food",
  },
  {
    id: 10,
    name: "Veggie Flammkuchen",
    description: "With seasonal vegetables",
    price: "€8.00",
    category: "food",
  },
  {
    id: 11,
    name: "Pretzel",
    description: "Fresh German pretzel",
    price: "€2.50",
    category: "food",
  },
  {
    id: 12,
    name: "Nachos",
    description: "With cheese, jalapeños & salsa",
    price: "€6.50",
    category: "food",
  },
  {
    id: 13,
    name: "Olives & Bread",
    description: "Marinated olives with fresh bread",
    price: "€5.00",
    category: "food",
  },
  {
    id: 14,
    name: "Vegan Snack Plate",
    description: "Hummus, vegetables & crackers",
    price: "€7.00",
    category: "food",
  },
];
