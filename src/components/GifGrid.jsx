import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";
import { useState } from "react";

export const GifGrid = ({ category, onDeleteCategory }) => {

  const gifsPerPage = 4;

  const { images, isLoading } = useFetchGifs(category);

  const [index, setIndex] = useState(0);

  const [paginationToggle, setPaginationToggle] = useState([true, false])

  const nextHandler = () => {
    setIndex(index + gifsPerPage);
    index < 36 ? setPaginationToggle([false, false]) : setPaginationToggle([false, true])
  }

  const previousHandler = () => {
    setIndex(index - gifsPerPage);
    index > gifsPerPage ? setPaginationToggle([false, false]) : setPaginationToggle([true, false])
  }

  return (
    <>
      <div className="gif-grid">
        <div className="gallery-header">
          <h4>▶️ {category}</h4>
          <div className="pagination">
            <button onClick={previousHandler} disabled={paginationToggle[0]}>←</button>
            <button onClick={nextHandler} disabled={paginationToggle[1]}>→</button>
            <button onClick={() => onDeleteCategory(category)} className={'close-btn'}> ✕ </button>
          </div>
        </div>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {
            images.slice(index, index + 4).map((image) => (
              <GifItem
                key={image.id}
                {...image} />
            ))
          }
        </div>
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
