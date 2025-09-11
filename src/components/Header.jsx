export default function Header() {
  return (
    <div className="w-full">
    <header className="fixed w-full flex justify-between p-6 shadow-md items-center bg-white z-50">
      <h2 className="font-bold text-xl ">myFoodRecipe</h2>
      <button className="flex flex-col gap-1">
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
      </button>
    </header>
    </div>
  );
}
