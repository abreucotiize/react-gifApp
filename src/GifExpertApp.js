import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import { GigGred } from "./components/GigGred";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  //   const add = () => {
  //     setCategories([...categories, "One Piece"]);
  //     console.log(categories);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategorie setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GigGred key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
