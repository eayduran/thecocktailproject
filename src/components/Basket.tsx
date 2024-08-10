"use client";
import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useBasketStore } from "../store/useBasketStore";
import BasketIcon from "../../public/icons/basket.svg";

export function DrawerDemo() {
  const basket = useBasketStore((state) => state.basket);
  const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
  const clearBasket = useBasketStore((state) => state.clearBasket);
  const handleSave = () => {
    const existingData = localStorage.getItem("savedCocktails");
    const savedCocktails = existingData ? JSON.parse(existingData) : [];
    const updatedCocktails = [...savedCocktails, ...basket];
    console.log(updatedCocktails);

    localStorage.setItem("savedCocktails", JSON.stringify(updatedCocktails));
    clearBasket();
  };
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button>
          <BasketIcon alt="search" width={20} height={20} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
        <div className="mx-auto w-full h-full p-5 flex-col">
          <DrawerHeader>
            <DrawerTitle>Cocktails Save Options</DrawerTitle>
            <DrawerDescription>
              * You can save your favorite cocktails here or remove them from
              the basket.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 pace-y-4 overflow-y-auto h-1/3 flex-col">
            {basket.length > 0 ? (
              basket.map((item) => (
                <div key={item.name} className="flex justify-between">
                  <p className="py-2">{item.name}</p>
                  <button onClick={() => removeFromBasket(item.name)}>
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="font-bold text-gray-600">
                No cocktails in the basket
              </p>
            )}
          </div>
          <DrawerFooter>
            {basket.length > 0 && (
              <>
                <DrawerClose asChild>
                  <button onClick={handleSave}>Save Cocktails</button>
                </DrawerClose>
                <DrawerClose asChild>
                  <button onClick={clearBasket}>Remove Cocktails</button>
                </DrawerClose>
              </>
            )}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
