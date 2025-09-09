import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex p-5 gap-2">
      <input type="text" className="border w-full" />
      <Search />
    </div>
  );
}
