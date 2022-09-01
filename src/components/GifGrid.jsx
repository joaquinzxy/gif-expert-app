import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  
  return (
    <>
      <div className="gallery-header">
        <h3>{ category }</h3>
        {/* <button onClick={onDeleteCategory(category)}><img src="src/img/close.png" alt=""/></button> */}
      </div>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image} />
          ))
        }
      </div>
    </>
  )
}
