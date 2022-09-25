import PropTypes from 'prop-types';
import { useState } from 'react';

export const GifItem = ({ urlPreview, url }) => {

  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  }

  return (
    <a className="card" href={url}>
      <img src={urlPreview} onLoad={imageLoaded} />
    </a>
  )
}

GifItem.propTypes = {
  url: PropTypes.string.isRequired
}