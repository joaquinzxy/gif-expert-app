import PropTypes from 'prop-types';


export const GifItem = ({ url }) => {

    return (
    <a className="card" href={url}>
        <img src={url}/>
    </a>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}