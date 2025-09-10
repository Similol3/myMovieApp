import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex p-5 gap-2 items-center ">
      <input
        type="text"
        className="border w-full outline-none p-2 rounded border-gray-500"
      />
      <Search />
    </div>
  );
}
