import PropTypes from 'prop-types';

export default function AccordionItem(props) {
  const { 
    id, title, point, paragraph, show, btnCollapse, idCollapse, ariaExpanded,
  } = props;

  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={id}>
        <button 
          className={`accordion-button ${btnCollapse}`} 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target={`#${idCollapse}`} 
          aria-expanded={ariaExpanded}
          aria-controls={idCollapse}
        >
          {title}
        </button>
      </h3>
      <div 
        id={idCollapse}
        className={`accordion-collapse collapse ${show || ''}`}
        aria-labelledby={id} 
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>{point}</strong> 
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  point: PropTypes.string,
  paragraph: PropTypes.string,
  show: PropTypes.string,
  btnCollapse: PropTypes.string,
  idCollapse: PropTypes.string,
  ariaExpanded: PropTypes.string,
};
