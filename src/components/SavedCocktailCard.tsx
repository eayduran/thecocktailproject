import { Cocktail } from "@/types/cocktail";
import Image from "next/image";
import { FC } from "react";

interface SavedCocktailCardProps {
  name: string;
  imageUrl: string;
  onRemove: () => void;
}

const SavedCocktailCard: FC<SavedCocktailCardProps> = ({
  name,
  imageUrl,
  onRemove,
}) => {
  return (
    <div className="overflow-hidden rounded-t-md">
      <Image
        className="rounded-t-md"
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        priority
      />
      <h2>{name}</h2>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default SavedCocktailCard;
