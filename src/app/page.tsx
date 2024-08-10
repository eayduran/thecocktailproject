import HomePageClient from "@/components/HomePageClient";

async function fetchCocktails(query: string) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await response.json();
  return data.drinks;
}

export default async function CocktailsPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const defaultCocktails = await fetchCocktails(
    searchParams.query || "margarita"
  );

  return <HomePageClient initialCocktails={defaultCocktails || []} />;
}
