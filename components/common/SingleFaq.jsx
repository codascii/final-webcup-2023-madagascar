const SingleFaq = ({ itm, index }) => {
  const { title, details, id } = itm;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${index !== 0 && "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="true"
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${index === 0 && "show"}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample4"
      >
        <div className="accordion-body">
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
