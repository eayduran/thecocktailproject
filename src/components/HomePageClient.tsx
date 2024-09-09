"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CocktailCard from "./CocktailCard";
import SearchBar from "./SearchBar";

interface HomePageClientProps {
  initialCocktails: any[];
}

const HomePageClient: React.FC<HomePageClientProps> = ({
  initialCocktails,
}) => {
  const [cocktails, setCocktails] = useState(initialCocktails);
  const [basket, setBasket] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    console.log("initialCocktails", initialCocktails, query);
  }, [query, initialCocktails]);

  const handleSearch = (searchQuery: string) => {
    router.push(`/?query=${searchQuery}`);
  };

  const addToBasket = (cocktail: string) => {
    setBasket([...basket, cocktail]);
  };

  return (
    <div className="bg-main pb-8 flex flex-col overflow-y-hidden h-screen justify-around items-center">
      <div className="my-2 max-w-screen-lg flex-col text-center px-8 py-4 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
          Welcome to Cocktails Book
        </h1>
        <p className="text-lg leading-relaxed">
          Discover a world of exquisite cocktails and drinks, curated from the
          finest ingredients and inspired by cultures around the globe. Whether
          you are a mixology enthusiast or just looking for your next favorite
          drink, our collection has something for everyone. Dive in and explore
          the art of cocktail creation with us!
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />
      {!query ? (
        <div>
          <h2 className="mt-8 w-full text-center text-lg text-white leading-relaxed border-t-[1px] pt-2">
            Popular Margaritas
          </h2>
          <div className="mt-4 grid-cols-4 grid sw-full max-w-screen-xl gap-16">
            {cocktails.map((cocktail: any) => (
              <CocktailCard
                key={cocktail.idDrink}
                cocktail={cocktail}
                onAddToBasket={() => addToBasket(cocktail.strDrink)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mt-8 w-full text-center text-lg text-white leading-relaxed border-t-[1px] pt-2">
            Here is a list of your searched cocktails
          </h2>
          <div className="mt-4 grid-cols-4 grid sw-full max-w-screen-xl gap-16">
            {initialCocktails.length > 0 ? (
              initialCocktails.map((cocktail: any) => (
                <CocktailCard
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                  onAddToBasket={() => addToBasket(cocktail.strDrink)}
                />
              ))
            ) : (
              <p className="text-white">No cocktails found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageClient;
