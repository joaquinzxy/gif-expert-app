import PropTypes from 'prop-types';


export const GifItem = ({ title, url }) => {

    return (
    <a className="card" href={url}>
        <img src={url} alt={title}/>
        <p>{title}</p>
    </a>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}