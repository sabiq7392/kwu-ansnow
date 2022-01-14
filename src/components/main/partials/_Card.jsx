import PropTypes from 'prop-types';

export default function Card(props) {
  const { img, alt, title, paragraph, btnText } = props;

  return (
    <div className="card" aria-hidden="true">
      <img 
        src={img} 
        className="card-img-top" 
        alt={alt} 
      />
      <div className="card-body">
        <h5 className="card-title placeholder-glow">{title}</h5>
        <p className="card-text placeholder-glow">{paragraph}</p>
        <a href="#somewhere placeholder" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  btnText: PropTypes.string,
};
