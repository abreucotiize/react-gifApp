import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGif } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GigGred = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>
      {loading && "Cargando..."}
      <div className="card-grid">
        {images.map((x) => (
          <GifGridItem key={x.id} {...x} />
        ))}
      </div>
    </>
  );
};
