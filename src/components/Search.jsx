import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex ">
      <input type="text" className="border" />
      <Search />
    </div>
  );
}
