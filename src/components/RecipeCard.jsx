import { Link } from "react-router";

export default function RecipeCard({ data }) {
  // console.log(data);

  return (
    <div className="relative w-[90%] mx-auto rounded-xl overflow-hidden shadow-xl ">
      <div className="w-full h-[300px] ">
        <img
          src={data.image}
          alt=""
          className="object-cover object-center w-full h-full "
        />
      </div>
      <div className="p-6">
        <h2 className="font-semibold text-2xl mb-2">{data.name}</h2>
        <h3 className="font-medium">Cuisine: {data.cuisine}</h3>
        <h4 className="text-[16px]">Difficulty: {data.difficulty}</h4>
        <span className="font-extralight block">
          Review: {data.reviewCount}
        </span>
        <span className="absolute top-2 right-2 w-fit px-2 py-0.5 bg-red-400/85 text-white text-[.8rem] font-semibold rounded block">
          {data.rating}
        </span>
        <Link
          to={`/${data.id}`}
          className="bg-green-500 py-0.5 px-2 text-white rounded mt-4 inline-block text-[13px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
