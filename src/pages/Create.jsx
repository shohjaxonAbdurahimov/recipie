import { useState } from "react";
import { v4 as uuid } from "uuid";
import useFetch from "../hooks/useFetch";
// const titleInp = document.getElementById("title-input");
// const methodInp = document.getElementById("method-input");
// const time = document.getElementById("time-input");
// const imageInp = document.getElementById("image-input");

function Create() {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [method, setMethod] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const { newData } = useFetch(
    "https://glow-spring-elf.glitch.me/recipes",
    "POST"
  );

  const addIngredient = (e) => {
    e.preventDefault();
    if (!ingredients.includes(ingredient) && ingredient) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
    console.log(ingredients);
  };

  function handleClick(e) {
    e.preventDefault();
    newData({
      title: title,
      cookingTime: cookingTime,
      img: imageUrl,
      method: method,
      ingredients,
      id: uuid(),
    });
    setTitle("");
    setCookingTime(0);
    setMethod("");
    setIngredient("");
    setIngredients([]);
    setImageUrl("");
  }

  return (
    <div>
      <h1 className="text-3xl text-center">Create New Recipie</h1>
      <form
        onSubmit={(e) => {
          handleClick(e);
        }}
        id="form"
        className="flex flex-col items-center"
      >
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Ingradients :</span>
          </label>
          <div className="flex gap-5 mb-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
              value={ingredient}
            />
            <button
              className="btn btn-primary"
              onClick={(e) => addIngredient(e)}
            >
              Add
            </button>
          </div>
          <p>
            Ingradients:{" "}
            <span>
              {ingredients.map((ing) => {
                return `${ing}, `;
              })}
            </span>
          </p>
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Cooking Time :</span>
          </label>
          <input
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Image Url:</span>
          </label>
          <input
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            value={imageUrl}
            type="url"
            placeholder="Put image url"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-3">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <textarea
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            type="textarea"
            placeholder="Type here"
            className="textarea input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary w-[320px] mt-5">Create</button>
      </form>
    </div>
  );
}

export default Create;
