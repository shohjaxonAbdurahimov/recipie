import React from "react";
import { useLocation, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function RecepieDetail() {
  const location = useLocation().pathname;
  const url = "https://glow-spring-elf.glitch.me/recipes" + location;
  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <div className="align-element py-15">
        <h1 className="text-center text-3xl font-bold my-4">Recepie Detail</h1>
        <hr />
        {isPending && (
          <h3 className="text-3xl font-bold text-center">Loading...</h3>
        )}
        {error && <h3 className="text-3xl font-bold text-center">{error}</h3>}
        {data && (
          <div className="flex justify-between py-10">
            <img
              className="w-[450px] h-[350px] shadow-current r"
              srcSet={data.img}
              alt="Recepie Meal Image"
            />
            <div className="px-5 py-3">
              <h2 className="text-2xl font-bold mb-3">{data.title}</h2>
              <h3 className="font-bold">Ingredients:</h3>
              <ul className="grid grid-cols-3 mb-3">
                {data.ingredients.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
              <h3 className="mb-3">
                <span className="font-bold">Cooking Time: </span>
                <span className="italic">{data.cookingTime}</span>
              </h3>
              <p className="w-100 max-w-[400px]">
                <span className="font-bold">Cooking Method: </span>
                {data.method}
              </p>
            </div>
            <Link className="btn btn-primary" to="/">
              All Reciepes
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default RecepieDetail;
