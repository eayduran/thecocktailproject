import { create } from "zustand";
interface CocktailSavingState {
  name: string;
  imgUrl: string;
}
interface BasketState {
  basket: CocktailSavingState[];
  addToBasket: (cocktail: string, imgUrl: string) => void;
  removeFromBasket: (cocktail: string) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<BasketState>((set) => ({
  basket: [],
  addToBasket: (cocktail: string, imgUrl: string) =>
    set((state) => ({
      basket: [...state.basket, { name: cocktail, imgUrl: imgUrl }],
    })),
  removeFromBasket: (cocktail: string) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.name !== cocktail),
    })),
  clearBasket: () => set({ basket: [] }),
}));
