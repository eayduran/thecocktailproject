"use client";

import { useState, useEffect } from "react";
import SavedCocktailCard from "@/components/SavedCocktailCard";

const SavedCocktailsPage = () => {
  interface Cocktail {
    name: string;
    imgUrl: string;
  }

  const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

  const updateSavedCocktails = () => {
    const saved = JSON.parse(localStorage.getItem("savedCocktails") || "[]");
    setSavedCocktails(saved);
  };

  useEffect(() => {
    updateSavedCocktails();

    const handleStorageChange = () => {
      updateSavedCocktails();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const removeCocktail = (cocktail: string) => {
    const updatedList = savedCocktails.filter((item) => item.name !== cocktail);
    setSavedCocktails(updatedList);
    localStorage.setItem("savedCocktails", JSON.stringify(updatedList));
  };

  return (
    <div
      style={{ height: "calc(100vh - 80px)" }}
      className="bg-main pb-8 flex text-white flex-col overflow-y-auto justify-start items-center"
    >
      <h1 className="text-lg">Saved Cocktails</h1>
      <div className="mt-4 grid-cols-4 grid sw-full max-w-screen-xl gap-16">
        {savedCocktails.map((cocktail, index) => (
          <SavedCocktailCard
            key={index}
            name={cocktail.name}
            imageUrl={cocktail.imgUrl}
            onRemove={() => removeCocktail(cocktail.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCocktailsPage;
