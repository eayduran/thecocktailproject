import { FC, useState } from "react";
import SearchIcon from "../../public/icons/search.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/3 relative inline-block">
      <input
        className="bg-gray-800 pl-4 pr-36 w-full py-2 rounded-md border-[1.5px] border-gray-400 text-white"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a cocktail"
      />
      <button type="submit" className="absolute right-2 top-3 text-gray-400">
        <SearchIcon alt="search" width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchBar;
