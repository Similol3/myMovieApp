import { Search } from "lucide-react";

export default function Searchbar({ searchItem, setSearchItem, handleSearch}) {
  return (
    <div className="flex p-5 items-center gap-6 ">
      <input
        type="text"
        placeholder="Search recipes..."
        className="border w-full outline-none p-2 rounded border-gray-500 my-[18%]"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <Search className="cursor-pointer" onClick={handleSearch} />
    </div>
  );
}
