import PropTypes from 'prop-types';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  articleImg: {
    height: 250,
    objectFit: 'cover',
    composes: ['card-img-top'],
  }
});

export default function ArticlesItem(props) {
  const { 
    imgFirst, 
    imgSecond, 
    imgThird, 
    altFirst, 
    altSecond,
    altThird,
    title, 
    paragraph, 
  } = props;
  const classes = useStyles();
  const colGrid = 'col-sm-4 col-md-4 col-lg-4';

  return (
    <div className="card">
      <div className="row">
        <div className={`col-6 ${colGrid}`}>
          <img 
            src={imgFirst}
            className={classes.articleImg}
            alt={altFirst}
          />
        </div>
        <div className={`col-6 ${colGrid}`}>
          <img 
            src={imgSecond}
            className={classes.articleImg}
            alt={altSecond} 
          />          
        </div>
        <div className={`col-12 ${colGrid}`}>
          <img 
            src={imgThird}
            className={classes.articleImg}
            alt={altThird} 
          />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{paragraph}</p>
      </div>
    </div>
  );
}

ArticlesItem.propTypes = {
  imgFirst: PropTypes.string,
  imgSecond: PropTypes.string,
  imgThird: PropTypes.string,
  altFirst: PropTypes.string,
  altSecond: PropTypes.string,
  altThird: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};
