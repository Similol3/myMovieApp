import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex p-5 items-center gap-6 ">
      <input
        type="text"
        className="border w-full outline-none p-2 rounded border-gray-500 my-[18%]"
      />
      <Search />
    </div>
  );
}
