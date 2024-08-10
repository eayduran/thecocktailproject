"use client";

import Image from "next/image";
import { FC } from "react";
import { useBasketStore } from "../store/useBasketStore";

interface CocktailCardProps {
  cocktail: any;
  onAddToBasket: () => void;
}

const CocktailCard: FC<CocktailCardProps> = ({ cocktail, onAddToBasket }) => {
  const addToBasket = useBasketStore((state) => state.addToBasket);

  return (
    <div className="rounded-md shadow-lg text-white border bg-gray-700s justify-center items-center flex-col">
      <div className="overflow-hidden rounded-t-md">
        <Image
          className="hover:scale-105 rounded-t-md transform transition duration-300 ease-in-out"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          width={200}
          height={200}
        />
      </div>
      <div className="pl-2 pb-2">
        <h2 className="overflow-hidden whitespace-nowrap text-ellipsis w-48 font-extrabold my-2">
          {cocktail.strDrink}
        </h2>
        <button
          className="bg-yellow-500 text-red-900 text-sm rounded-md px-2 py-[1px]"
          onClick={addToBasket.bind(
            null,
            cocktail.strDrink,
            cocktail.strDrinkThumb
          )}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default CocktailCard;
