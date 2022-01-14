import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sliderImg: {
    [`@media (max-width: 575px)`]: {
      height: 240,
    },
    [`@media (min-width: 576px)`]: {
      height: 430,
    },
    [`@media (min-width: 768px)`]: {
      height: 505,
    },
    composes: ['d-block', 'w-100'],
  },
});

export default function CarouselItem(props) {
  const { img, alt, caption, paragraph, active } = props;
  const classes = useStyles();
  
  return (
    <div className={'carousel-item ' + active}>
      <img 
        src={img} 
        className={classes.sliderImg}
        alt={alt}
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>{caption}</h5>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  paragraph: PropTypes.string,
};
