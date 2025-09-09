export default function Header() {
  return (
    <header className="flex justify-between p-6 shadow-md items-center">
      <h2 className="font-bold text-xl">Moviebox</h2>
      <button className="flex flex-col gap-1">
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
        <span className="bg-black w-4 h-1 inline-block"></span>
      </button>
    </header>
  );
}
